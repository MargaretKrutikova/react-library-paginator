import React, { Component } from 'react';

import DefaultPaginator from './examples/DefaultPaginator';
import BootstrapPaginator from './examples/BootstrapPaginator';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="title">No Boostrap</div>
        <DefaultPaginator />
        <div className="title">Bootstrap</div>

        <BootstrapPaginator />
      </div>
    );
  }
}
