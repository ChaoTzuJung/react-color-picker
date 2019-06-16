import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

import PaletteMetaForm  from 'components/molecules/PaletteMetaForm';

const drawerWidth = 400;

const styles = theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        height: "64px",
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
    navBtns: {

    }
});

class PaletteFormNav extends Component {

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        const { classes, open, handleDrawerOpen, palettes, savePalette } = this.props;
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
                        onClick={handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit' noWrap>
                        Create A palette
                    </Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                    <PaletteMetaForm palettes={palettes} savePalette={savePalette} />
                    <Link to = '/'>
                        <Button  variant='contained' color="secondary">Go Back</Button>
                    </Link>
                </div>
                </AppBar>
            </div>
        )
    }
}

PaletteFormNav.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    palettes: PropTypes.array,
    handleDrawerOpen: PropTypes.func,
    savePalette: PropTypes.func,
};

PaletteFormNav.defaultProps = {
    open: true,
};

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
