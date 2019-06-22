import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import sizes from 'utils/media';

import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    root: {
        display: 'inline-block',
        float: "left",
        position: 'relative',
        width: '20%',
        height: '25%',
        margin: '0 auto',
        cursor: 'pointer',
        [sizes.down("lg")]: {
            width: "25%",
            height: '20%',
        },
        [sizes.down("md")]: {
            width: "50%",
            height: '10%',
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: '5%',
        },
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
        "&:hover svg": {
            color: 'white',
            transform: 'scale(1.3)',
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