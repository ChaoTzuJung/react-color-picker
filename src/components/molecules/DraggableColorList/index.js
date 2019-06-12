import React from 'react';
import PropTypes from 'prop-types';
import { SortableContainer } from 'react-sortable-hoc';

import DraggableColorBox from 'components/atoms/DraggableColorBox';

const DraggableColorList = ({ colors, removeColor }) => (
    <div style={{ height: '100%' }}>
        {
            colors.map((color, index) => (
                <DraggableColorBox 
                    index={index}
                    key={color.color}
                    color={color.color}
                    name={color.name}
                    handleClick={() => removeColor(color.name)}
                />
            ))
        }
    </div>
);



DraggableColorList.propTypes = {
    colors: PropTypes.array,
    removeColor: PropTypes.func,
    axis: PropTypes.string, // SortableContainer HOC's props 
    onSortEnd: PropTypes.func, // SortableContainer HOC's props 
};

DraggableColorList.defaultProps = {
    colors: [{ name: 'blue', color: 'blue' }],
    axis: 'xy' // x, y, xy 3個方向
};

export default SortableContainer(DraggableColorList);
