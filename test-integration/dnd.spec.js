import { expect } from 'chai';
import { mount } from 'enzyme';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import { ItemsPanel, Placeholder } from '../client/js/components';
import { ActionsStub } from './helpers';

describe('ItemsPanel', function() {
    function wrapInTestContext(DecoratedComponent) {
        return DragDropContext(TestBackend)(
            // eslint-disable-next-line react/prefer-stateless-function
            class TestContextContainer extends Component {
                render() {
                    return <DecoratedComponent {...this.props}/>;
                }
            }
        );
    }

    function setup() {
        const actions = new ActionsStub();

        const TestContext = wrapInTestContext(ItemsPanel.DecoratedComponent);

        const items = [
            { id: 1, caption: 'Item 1' },
            { id: 2, caption: 'Item 2' },
        ];
        const root = mount(
            <TestContext items={items}
                         actions={actions}
            />
        );

        const place = root.find(Placeholder);
        const source = place.at(0);
        const target = place.at(1);
        const backend = root.node.getManager().getBackend();

        return {
            actions,
            root,
            source,
            target,
            backend,
        };
    }

    it('allows to drag\'n\' drop Items', function() {
        const { actions, backend, source, target } = setup();

        backend.simulateBeginDrag([source.node.getDecoratedComponentInstance().getHandlerId()]);
        expect(source).to.have.className('dragging');

        backend.simulateHover([target.node.getHandlerId()]);
        expect(target).to.have.className('over');

        backend.simulateDrop();
        expect(actions.move).to.have.been.calledWith(0, 1);
        expect(target).to.not.have.className('over');

        backend.simulateEndDrag();
        expect(source).to.not.have.className('dragging');
    });
});
