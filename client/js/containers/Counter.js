import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { dispatcher } from '../selectors';

const Counter = props => (
    <div>
        <h1>Counter</h1>
        <p>Count: {props.counter}</p>
        <Button onClick={props.actions.inc}>Inc</Button>
        <Button onClick={props.actions.dec}>Dec</Button>
    </div>
);

export default connect(x => x, dispatcher)(Counter);
