import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Placeholder from './Placeholder';
import Item from './Item';

// eslint-disable-next-line react/prefer-stateless-function
class ItemsPanel extends Component {
    render() {
        const placeholders = this.props.items.map((x, i) =>
            <Placeholder key={i} pos={i} item={x} actions={this.props.actions}>
                <Item {...x} pos={i}/>
            </Placeholder>
        );

        return (
            <div className="items">
                {placeholders}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(ItemsPanel);
