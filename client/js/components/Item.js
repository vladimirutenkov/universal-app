import React from 'react';

export default function Item(props) {
    return (
        <div className="item">
            {props.caption}
        </div>
    );
}
