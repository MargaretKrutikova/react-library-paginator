import React, { Component } from 'react';

import Paginator from 'react-library-paginator';

export default class BootstrapCustomClassesPaginator extends Component {
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
        useBootstrapClasses={true}
        classes={{
          list: 'pagination-lg',
          pageLink: 'b-paginator-link',
          pageItem: 'b-paginator-item'
        }}
      />
    );
  }
}
