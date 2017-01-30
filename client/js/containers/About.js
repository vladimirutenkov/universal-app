import React from 'react';
import { connect } from 'react-redux';
import { dispatcher } from '../selectors';

const About = () => (
    <div>
        <h1>About</h1>
        <p>Пыщь-Пыщь Ололо</p>
        <p>Я водитель НЛО</p>
    </div>
);

export default connect(x => x, dispatcher)(About);
