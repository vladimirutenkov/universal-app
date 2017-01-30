import { expect } from 'chai';
import { mount } from 'enzyme';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import { ItemsPanel, Item, Placeholder } from '../client/js/components';
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

        const item = root.find(Item).at(0);
        const place = root.find(Placeholder).at(1);
        const backend = root.node.getManager().getBackend();

        return {
            actions,
            root,
            item,
            place,
            backend,
        };
    }

    it('allows to drag\'n\' drop Items', function() {
        const { actions, backend, item, place } = setup();

        backend.simulateBeginDrag([item.node.getHandlerId()]);
        expect(item).to.have.className('dragging');

        backend.simulateHover([place.node.getHandlerId()]);
        expect(place).to.have.className('over');

        backend.simulateDrop();
        expect(actions.move).to.have.been.calledWith(0, 1);
        expect(place).to.not.have.className('over');

        backend.simulateEndDrag();
        expect(item).to.not.have.className('dragging');
    });
});
