import React, { Component } from 'react';

import DefaultPaginatorDemo from './demo/DefaultPaginatorDemo';
import BootstrapPaginatorDemo from './demo/BootstrapPaginatorDemo';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="title">No Boostrap</div>
        <DefaultPaginatorDemo />
        <div className="title">Bootstrap</div>
        <BootstrapPaginatorDemo />
      </div>
    );
  }
}
