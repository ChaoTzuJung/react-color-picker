import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';

import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    root: {
        display: 'inline-block',
        position: 'relative',
        width: '20%',
        height: '25%',
        margin: '0 auto',
        marginBottom: '-3.5px',
        cursor: 'pointer',
    },
    boxContent : {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        left: '0',
        bottom: '0',
        padding: '10px',
        color: 'rgba(0,0,0,0.5)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        // marginBottom: '-3.5px',
        "&:hover svg": {
            color: 'white',
            transform: 'scale(1.5)',
        }
    },
    deleteIcon: {
        transition: 'all 0.3s ease-in-out'
    }
};

const DraggableColorBox = SortableElement(
    ({ color, name, classes, handleClick }) => {
        return (
            <div className={classes.root} style={{ backgroundColor: color }}>
                <div className={classes.boxContent}>
                    <span>{name}</span>
                    <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
                </div>
            </div>
        )
    }
)

DraggableColorBox.propTypes = {
    classes: PropTypes.object,
    color: PropTypes.string,
    name: PropTypes.string,
    handleClick: PropTypes.func,
};

DraggableColorBox.defaultProps = {
    color: 'teal',
    name: 'teal',
};

export default withStyles(styles)(DraggableColorBox)