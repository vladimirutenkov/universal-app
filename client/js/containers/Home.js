import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { dispatcher } from '../selectors';
import { ItemsPanel } from '../components';

const Home = props => (
    <div>
        <h1>Home</h1>
        <Tabs defaultActiveKey={1} animation={false} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1">
                <h2>Tab 1 content</h2>
                <hr/>
                <ItemsPanel items={props.items} actions={props.actions}/>
            </Tab>
            <Tab eventKey={2} title="Tab 2">
                <h2>Tab 2 content</h2>
            </Tab>
        </Tabs>
    </div>
);

export default connect(x => x, dispatcher)(Home);
