import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        display: 'inline-block',
        position: 'relative',
        width: '20%',
        height: '25%',
        margin: '0 auto',
        marginBottom: '-3.5px',
        cursor: 'pointer',
    }
};

const DraggableColorBox = ({ color, classes }) => {
    return (
        <div className={classes.root} style={{ backgroundColor: color }}>
            {color}
        </div>
    )
}

// DraggableColorBox.propTypes = {
//     color: PropTypes.string,
//     classes: PropTypes.string,
// };

// DraggableColorBox.defaultProps = {
//     color: 'teal',
// };

export default withStyles(styles)(DraggableColorBox)