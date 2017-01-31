import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { compose } from 'redux';
import { draggableTypes } from '../constants';

const placeSource = {
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

const placeTarget = {
    drop(props, monitor) {
        const oldPos = monitor.getItem().pos;
        const newPos = props.pos;
        props.actions.move(oldPos, newPos);
    },
};

function collectTarget(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    };
}

const Placeholder = props => props.connectDropTarget(props.connectDragSource(
    <div className={`place${props.isOver ? ' over' : ''}${props.isDragging ? ' dragging' : ''}`}>
        {props.children}
    </div>
));

export default compose(
    DropTarget(draggableTypes.ITEM, placeTarget, collectTarget),
    DragSource(draggableTypes.ITEM, placeSource, collectSource),
)(Placeholder);
