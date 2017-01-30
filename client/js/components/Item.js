import React from 'react';
import { DragSource } from 'react-dnd';
import { draggableTypes } from '../constants';

const itemSource = {
    beginDrag(props) {
        return { pos: props.pos };
    },
};

function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
}

const Item = props => props.connectDragSource(
    <div className={`item${props.isDragging ? ' dragging' : ''}`}>
        {props.caption}
    </div>
);

export default DragSource(draggableTypes.ITEM, itemSource, collectSource)(Item);
