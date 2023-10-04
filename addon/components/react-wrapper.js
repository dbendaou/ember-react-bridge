import Component from '@glimmer/component';

// require('react');
// require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';

import { action } from '@ember/object';

import { createRoot } from 'react-dom/client';

export default class ReactBridgeComponent extends Component {
  reactElement = null;

  @action
  renderReactComponent() {
    this._renderReactComponent();
  }

  willDestroy() {
    super.willDestroy(...arguments);

    ReactDOM.unmountComponentAtNode(this.reactElement);
  }

  _renderReactComponent() {
    this.reactElement = document.createElement('div', 'react');
    let container = document.getElementById('react');
    let root = createRoot(container);
    root.render(
      React.createElement('h1', { className: 'greeting' }, 'React here! 🤘'),
    );
  }
}
