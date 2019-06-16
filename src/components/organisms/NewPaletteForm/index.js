import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import { arrayMove } from 'react-sortable-hoc';

import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";

import DraggableColorList from 'components/molecules/DraggableColorList';
import PaletteFormNav from 'components/molecules/PaletteFormNav'
import ColorPickerForm from 'components/molecules/ColorPickerForm'

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    height: "calc(100vh - 64px)", // subtract navbar default git aheight
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
      transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      colors: this.props.palettes[0].colors,
    };
  }

  addNewColor = newColor => {
    this.setState({ colors: [...this.state.colors, newColor] });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  savePalette = newPaletteName => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors: this.state.colors,
    }
    this.props.savePalette(newPalette);
    this.props.history.push('/');
  }

  removeColor = colorName => {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    })
  }

  // 儲存 drag 後的狀態
  onSortEnd = ({oldIndex, newIndex}) => {
    // setSate 用 arraow function 參數是 state 可以用 destructuring 取出 state
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  clearColors = () => {
    this.setState({ colors: [] })
  }

  addRandomColor = () => {
    // pick ramdom color from exist palette
    const allColors =  this.props.palettes.map(palette => palette.colors).flat();
    const randIndex = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[randIndex];
    this.setState({ colors: [...this.state.colors, randomColor] })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteIsFull = colors.length >= maxColors; 
    return (
      <div className={classes.root}>
        <PaletteFormNav 
          open={open}
          palettes={palettes}
          savePalette={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant='h4'>Design Your Palette</Typography>
          <div>
            <Button variant='contained' color="secondary" onClick={this.clearColors}>Clear Palette</Button>
            <Button 
              variant='contained'
              color="primary"
              disabled={paletteIsFull}
              onClick={this.addRandomColor}
            >
              Random Palette
            </Button>
          </div>
          <ColorPickerForm 
            paletteIsFull={paletteIsFull}
            addNewColor={this.addNewColor}
            colors={colors}
          />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

NewPaletteForm.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
  palettes: PropTypes.array,
  savePalette: PropTypes.func,
  maxColors: PropTypes.number,
};

NewPaletteForm.defaultProps = {
  maxColors: 20,
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);