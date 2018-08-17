import React, { Component } from 'react';

import Paginator from 'react-library-paginator';

const BootstrapPaginatorExample = () => (
  <div className="example-container">
    <div className="example">
      <div className="subtitle">Bootstrap default css</div>
      <pre className="example-code">
        {`<Paginator
  totalItems={totalItems}
  currentPage={page}
  onPageChange={this.handlePageChange}
  useBootstrapClasses={true}
/>
`}
      </pre>
      <BootstrapPaginator />
    </div>
    <div className="example">
      <div className="subtitle">Custom styling via css classes</div>
      <div style={{ display: 'flex' }}>
        <pre className="example-code" style={{ marginRight: 20 }}>
          {`<Paginator
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
`}
        </pre>
        <pre className="example-code">
          {`/* css */
...
.b-paginator-link {
  color: rgb(155, 70, 70);
  box-shadow: none !important;
}
.b-paginator-item.disabled .page-link,
.b-paginator-link {
  background-color: rgb(253, 232, 232);
}
.b-paginator-item.active .page-link {
  background-color: rgb(255, 153, 153);
}
.b-paginator-item.disabled .page-link {
  color: rgb(88, 71, 71);
}
`}
        </pre>
      </div>
      <CustomClassesPaginator />
    </div>
  </div>
);

export default BootstrapPaginatorExample;

class BootstrapPaginator extends Component {
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
