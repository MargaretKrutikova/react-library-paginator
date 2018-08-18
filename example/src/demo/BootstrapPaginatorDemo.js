import React, { Component } from 'react';

import Paginator from 'react-library-paginator';

import BootstrapPaginator from '../examples/BootstrapPaginator';
import BootstrapCustomClassesPaginator from '../examples/BootstrapCustomClassesPaginator';

const BootstrapPaginatorExamples = () => (
  <div className="demo-container">
    <div className="demo">
      <div className="subtitle">Bootstrap default css</div>
      <pre className="demo-code">
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
    <div className="demo">
      <div className="subtitle">Custom styling via css classes</div>
      <div style={{ display: 'flex' }}>
        <pre className="demo-code" style={{ marginRight: 20 }}>
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
        <pre className="demo-code">
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
      <BootstrapCustomClassesPaginator />
    </div>
  </div>
);

export default BootstrapPaginatorExamples;
