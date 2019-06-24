import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    miniPalette: {
        position: 'relative',
        padding: '8px',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        overflow: 'hidden',
        cursor: 'pointer',
        "&:hover svg": {
            opacity: 1,
        }
    },
    deleteIcon: {
        color: "white",
        backgroundColor: "#ed3d30",
        width: "30px",
        height: "30px",
        position: "absolute",
        top: "0px",
        right: "0px",
        padding: "5px",
        zIndex: 10,
        opacity: 0,
        transition: "all 0.3s ease-in-out",
    },
    colors: {
        width: '100%',
        height: '150px',
        backgroundColor: '#dae1e4',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    miniColor: {
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        height: '25%',
        width: '20%',
        marginBottom: '-3.5px',

    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        margin: '0',
        paddingTop: '8px',
        color: 'black',
        fontSize: '16px'
    },
    emoji: {
        marginLeft: '8px',
        fontSize: '24px'
    }
};

// classes props for HOC withStyles
class MiniPalette extends PureComponent {

    deletePalette = e => {
        e.stopPropagation();
        this.props.openDialog(this.props.id);
    }

    handleClick = () => {
        this.props.goToPalette(this.props.id);
    }

    render() {
        const { classes, paletteName, emoji, colors, goToPalette, id } = this.props;
        console.log("Re-render: ", paletteName)
        const miniColorBoxes = colors.map(color => (
            <div
                className={classes.miniColor}
                style={{backgroundColor: color.color}}
                key={color.name}
            />
        ));
        return (
            <div className={classes.miniPalette} onClick={this.handleClick}>
                <DeleteIcon className={classes.deleteIcon} onClick={this.deletePalette} />
                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName}
                    <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        )
    }
};

MiniPalette.propTypes = {
    classes: PropTypes.object,
    paletteName: PropTypes.string,
    emoji: PropTypes.string,
    colors: PropTypes.array,
    goToPalette: PropTypes.func,
    openDialog: PropTypes.func,
    id: PropTypes.string,
};

export default withStyles(styles)(MiniPalette);

