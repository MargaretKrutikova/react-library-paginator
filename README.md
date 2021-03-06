# react-library-paginator

> A React bootstrap-oriented customizable paginator component written in typescript with support for `flow`.

[![NPM](https://img.shields.io/npm/v/react-library-paginator.svg)](https://www.npmjs.com/package/react-library-paginator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Features included:

- **Paging functionality** - tested and proven to work, will make those pages appear on the screen,
- **Includes built-in styles** - default styling, for the lazy ones,
- **Boostrap-friendly** - compatible with Boostrap 4, for the conservative ones,
- **Customizable styles** - allows to customize styles via css classes or inline styles, for the love-to-customize-things ones,
- **Customizable navigation** - allows to customize paginator navigation elements,
- **Supports flow** - has library definition in `flow-types`.

<p align="center"><img src="https://media.giphy.com/media/jVqjIZ6YOq00c15i3T/giphy.gif" width="350px"/>
<p align="center"><img src="https://media.giphy.com/media/1wX9CyVyZbRJZZ9pPJ/giphy.gif" width="350px"/></p>
<p align="center"><img src="https://media.giphy.com/media/5bkoiSvcKft7si0jAm/giphy.gif" width="400px"/></p>

## Demo

Check out [demo](https://margaretkrutikova.github.io/react-library-paginator/) showing a few common use-cases.

## Install

```bash
npm install --save react-library-paginator
```

As of version 2 has `flow` libdef on [flow-typed](https://github.com/flow-typed/flow-typed). After the paginator is installed, the libdef will be pulled in when running `flow-typed install`, read more on [flow-typed blog post](https://flow.org/blog/2016/10/13/Flow-Typed/).

## Usage

```javascript
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

## API

| Name                | Type       | Default      | Description                                                                                                            |
| ------------------- | ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| totalItems          | `number`   | **Required** | Total number of items that will be paginated.                                                                          |
| onPageChange        | `function` | **Required** | Event that is triggered when the page changes. The new page number is passed into the event handler function.          |
| currentPage         | `number`   | `1`          | Number of the current page.                                                                                            |
| itemsPerPage        | `number`   | `10`         | How many items are displayed per one page.                                                                             |
| maxPagesToShow      | `number`   | `3`          | How many page numbers should be visible in the paginator between `previous` and `next` navigation symbols.             |
| useBootstrapClasses | `bool`     | `false`      | Indicates whether to apply bootstrap 4 pagination classes (e.g. `pagination`, `page-item` etc) to the paging elements. |
| styles              | `object`   | `{}`         | Object defining class names for the paging elements (see below).                                                       |
| classes             | `object`   | `{}`         | Object defining inline styles for the paging elements (see below).                                                     |
| navigation          | `object`   | `{}`         | Object customizing visibility and texts for paginator navigation elements (see below).                                 |

### Classes and styles

| Object key       | Type (classes/styles) | Description                                                                      |
| ---------------- | --------------------- | -------------------------------------------------------------------------------- |
| container        | `string`/`object`     | Class name/style object for the outer container (`nav`).                         |
| list             | `string`/`object`     | Class name/style object for the paginator list (`ul`).                           |
| pageItem         | `string`/`object`     | Class name/style object for the paginator list item (`li`).                      |
| pageLink         | `string`/`object`     | Class name/style object for the link inside the list item (`a`).                 |
| pageLinkActive   | `string`/`object`     | Class name/style object for the link of currently selected page.                 |
| pageLinkDisabled | `string`/`object`     | Class name/style object for the link of non-selectable pages/navigation symbols. |

### Navigation

| Object key       | Type      | Description                                                         |
| ---------------- | --------- | ------------------------------------------------------------------- |
| firstPageText    | `string`  | Text displayed inside navigation element for the first page .       |
| prevPageText     | `string`  | Text displayed inside navigation element for the previous page.     |
| nextPageText     | `string`  | Text displayed inside navigation element for the next page .        |
| lastPageText     | `string`  | Text displayed inside navigation element for the last page .        |
| hideFirstPageNav | `boolean` | Indicates whether to hide navigation element for the first page.    |
| hidePrevPageNav  | `boolean` | Indicates whether to hide navigation element for the previous page. |
| hideNextPageNav  | `boolean` | Indicates whether to hide navigation element for the next page .    |
| hideLastPageNav  | `boolean` | Indicates whether to hide navigation element for the last page .    |

## Contributing

Contributions are welcome, bug reports, pull requests, feature requests are highly appreciated and rewarded
with lightning fast responses and developing!

## License

MIT © [MargaretKrutikova](https://github.com/MargaretKrutikova)
