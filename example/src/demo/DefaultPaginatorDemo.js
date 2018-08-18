import React from 'react';

import BasicPaginator from '../examples/BasicPaginator';
import CustomClassesPaginator from '../examples/CustomClassesPaginator';
import CustomStylesPaginator from '../examples/CustomStylesPaginator';
import CustomNavigationPaginator from '../examples/CustomNavigationPaginator';

const DefaultPaginatorDemo = () => (
  <div className="demo-container">
    <div className="demo">
      <div className="subtitle">Default css</div>
      <pre className="demo-code">
        {`<Paginator
  totalItems={totalItems}
  currentPage={page}
  onPageChange={this.handlePageChange}
/>
`}
      </pre>
      <BasicPaginator />
    </div>
    <div className="demo">
      <div className="subtitle">Custom styling via css classes</div>
      <div style={{ display: 'flex' }}>
        <pre className="demo-code" style={{ marginRight: 20 }}>
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
        <pre className="demo-code">
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
    <div className="demo">
      <div className="subtitle">Custom styling via inline styles</div>
      <pre className="demo-code">
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
    <div className="demo">
      <div className="subtitle">Custom navigation options</div>
      <pre className="demo-code">
        {`<Paginator
  totalItems={totalItems}
  currentPage={page}
  onPageChange={this.handlePageChange}
  navigation={{
    firstPageText: 'start',
    lastPageText: 'end',
    nextPageText: '»',
    prevPageText: '«'
  }}
/>
`}
      </pre>
      <CustomNavigationPaginator />
    </div>
  </div>
);

export default DefaultPaginatorDemo;
