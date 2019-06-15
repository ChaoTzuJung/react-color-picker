import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";
import { arrayMove } from 'react-sortable-hoc';

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from 'components/molecules/DraggableColorList';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
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
      currentColor: 'teal',
      open: false,
      colors: [],
      newColorName: '',
      newPaletteName: '',
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.state.colors.every(({ color }) => color !== this.state.currentColor)
    );
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  }

  addNewColor = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    }
    this.setState({ colors: [...this.state.colors, newColor], newColorName: '' });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  savePalette = () => {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      id: this.state.newPaletteName.toLowerCase().replace(/ /g, '-'),
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

  render() {
    const { classes, maxColors } = this.props;
    const { open, currentColor, newColorName, newPaletteName, colors } = this.state;
    const paletteIsFull = colors.length >= maxColors; 
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.savePalette} ref='form'>
              <TextValidator
                value={newPaletteName}
                label="Palette Name"
                name="newPaletteName"
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Enter a palette name",
                  "Palette name must be unique",
                ]}
              />
              <Button variant='contained' color="primary" type="submit">Save Palette</Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
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
          <ChromePicker color={currentColor} onChangeComplete={this.updateCurrentColor} />
          <ValidatorForm onSubmit={this.addNewColor} ref='form'>
          <TextValidator
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already used!"
            ]}
          />
            <Button 
              variant='contained'
              type="submit"
              color="primary"
              disabled={paletteIsFull}
              style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
            >
            {paletteIsFull ? 'Palette Full' : '  Add Color'}
          </Button>
          </ValidatorForm>
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