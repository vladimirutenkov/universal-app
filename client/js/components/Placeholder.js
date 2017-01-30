import React from 'react';
import { DropTarget } from 'react-dnd';
import { draggableTypes } from '../constants';

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

const Placeholder = props => props.connectDropTarget(
    <div className={`place${props.isOver ? ' over' : ''}`}>
        {props.children}
    </div>
);

export default DropTarget(draggableTypes.ITEM, placeTarget, collectTarget)(Placeholder);
