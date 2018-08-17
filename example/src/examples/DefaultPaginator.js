import React, { Component } from 'react';

import Paginator from 'react-library-paginator';

const DefaultPaginatorExample = () => (
  <div className="example-container">
    <div className="example">
      <div className="subtitle">Default css</div>
      <pre className="example-code">
        {`<Paginator
  totalItems={totalItems}
  currentPage={page}
  onPageChange={this.handlePageChange}
/>
`}
      </pre>
      <BasicPaginator />
    </div>
    <div className="example">
      <div className="subtitle">Custom styling via css classes</div>
      <div style={{ display: 'flex' }}>
        <pre className="example-code" style={{ marginRight: 20 }}>
          {`<Paginator
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
`}
        </pre>
        <pre className="example-code">
          {`/* css */
...
.paginator-list {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 18px;
}
.paginator-link {
  color: #285e28;
}
.paginator-link--active {
  border-bottom: 2px solid #285e28;
}
.paginator-link--disabled {
  color: #64726a;
}
`}
        </pre>
      </div>
      <CustomClassesPaginator />
    </div>
    <div className="example">
      <div className="subtitle">Custom styling via inline styles</div>
      <pre className="example-code">
        {`<Paginator
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
    pageLinkActive: { backgroundColor: '#b1d1be'},
    pageItem: { padding: '5px 0' }
  }}
/>
`}
      </pre>
      <CustomStylesPaginator />
    </div>
  </div>
);

export default DefaultPaginatorExample;

class BasicPaginator extends Component {
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
      />
    );
  }
}

class CustomClassesPaginator extends Component {
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

class CustomStylesPaginator extends Component {
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
