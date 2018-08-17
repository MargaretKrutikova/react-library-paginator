import React, { Component } from 'react';

import Paginator from 'react-library-paginator';

export default class CustomStylesPaginator extends Component {
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
        styles={{
          container: {
            padding: '10px 0',
            borderTop: '1px solid #ccc',
            borderBottom: '1px solid #ccc'
          },
          list: { marginBottom: 0, padding: 0 },
          pageLink: { padding: '8px 13px', color: '#285e28' },
          pageLinkActive: { backgroundColor: '#b1d1be' },
          pageItem: { padding: '5px 0' }
        }}
      />
    );
  }
}
