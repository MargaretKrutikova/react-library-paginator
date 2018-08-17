import React, { Component } from 'react';

import Paginator from 'react-library-paginator';

export default class CustomClassesPaginator extends Component {
  state = { page: 1, totalItems: 120 };
  handlePageChange = page => {
    this.setState({ page });
  };
  render() {
    const { page, totalItems } = this.state;
    return (
      <Paginator
        totalItems={totalItems}
        currentPage={page}
        onPageChange={this.handlePageChange}
        classes={{
          container: 'paginator-container',
          list: 'paginator-list',
          pageItem: 'paginator-item',
          pageLink: 'paginator-link',
          pageLinkActive: 'paginator-link--active',
          pageLinkDisabled: 'paginator-link--disabled'
        }}
      />
    );
  }
}
