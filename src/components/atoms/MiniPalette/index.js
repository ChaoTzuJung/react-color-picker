import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {
    miniPalette: {
        position: 'relative',
        padding: '8px',
        backgroundColor: 'white',
        borderRadius: '5px',
        overflow: 'hidden',
        "&:hover": {
            cursor: 'pointer',
        }
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
    },
};

// classes props for HOC withStyles
const MiniPalette = ({ classes, paletteName, emoji, colors }) => {
    const miniColorBoxes = colors.map(color => (
        <div
            className={classes.miniColor}
            style={{backgroundColor: color.color}}
            key={color.name}
        />
    ));
    return (
        <div className={classes.miniPalette}>
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


MiniPalette.propTypes = {
    classes: PropTypes.object,
    paletteName: PropTypes.string,
    emoji: PropTypes.string,
    colors: PropTypes.array,
};

export default withStyles(styles)(MiniPalette);

