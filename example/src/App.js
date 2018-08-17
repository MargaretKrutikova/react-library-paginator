import React, { Component } from 'react';

import DefaultPaginatorExamples from './examples/DefaultPaginatorExamples';
import BootstrapPaginatorExamples from './examples/BootstrapPaginatorExamples';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="title">No Boostrap</div>
        <DefaultPaginatorExamples />
        <div className="title">Bootstrap</div>
        <BootstrapPaginatorExamples />
      </div>
    );
  }
}
