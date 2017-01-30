import React from 'react';
import { connect } from 'react-redux';
import { dispatcher } from '../selectors';
import { Navigation } from '../components';

const Layout = props => (
    <div>
        <Navigation/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default connect(x => x, dispatcher)(Layout);
