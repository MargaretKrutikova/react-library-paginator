# react-library-paginator

>

[![NPM](https://img.shields.io/npm/v/react-library-paginator.svg)](https://www.npmjs.com/package/react-library-paginator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img src="https://media.giphy.com/media/29JS9rqqFTRpcqMKD7/giphy.gif" />
<img src="https://media.giphy.com/media/pO7fHiieUaDKJAGOWb/giphy.gif" />
<img src="https://media.giphy.com/media/dCB0T9pLkIOPLkxvQZ/giphy.gif" />

## Install

```bash
npm install --save react-library-paginator
```

## Usage

```tsx
import React, { Component } from 'react';

import Paginator from 'react-library-paginator';

export default class BasicPaginator extends Component {
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
```

## License

MIT © [MargaretKrutikova](https://github.com/MargaretKrutikova)
