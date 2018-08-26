import * as PropTypes from 'prop-types';

export type PaginatorStyles = {
  container?: object;
  list?: object;
} & PageStyles;

export type PageStyles = {
  pageItem?: object;
  pageLink?: object;
  pageLinkActive?: object;
  pageLinkDisabled?: object;
};

export type PaginatorClasses = {
  container?: string;
  list?: string;
} & PageClasses;

export type PageClasses = {
  pageItem?: string;
  pageLink?: string;
  pageLinkActive?: string;
  pageLinkDisabled?: string;
};

export type Navigation = {
  firstPageText?: string;
  prevPageText?: string;
  nextPageText?: string;
  lastPageText?: string;
  hideFirstPageNav?: boolean;
  hidePrevPageNav?: boolean;
  hideNextPageNav?: boolean;
  hideLastPageNav?: boolean;
};

export const CustomPropTypes = {
  styles: PropTypes.shape({
    container: PropTypes.object,
    list: PropTypes.object,
    pageItem: PropTypes.object,
    pageLinkActive: PropTypes.object,
    pageLinkDisabled: PropTypes.object,
    pageLink: PropTypes.object
  }),
  classes: PropTypes.shape({
    container: PropTypes.string,
    list: PropTypes.string,
    pageItem: PropTypes.string,
    pageLinkActive: PropTypes.string,
    pageLinkDisabled: PropTypes.string,
    pageLink: PropTypes.string
  }),
  navigation: PropTypes.shape({
    firstPageText: PropTypes.string,
    prevPageText: PropTypes.string,
    nextPageText: PropTypes.string,
    lastPageText: PropTypes.string,
    hideFirstPageNav: PropTypes.bool,
    hidePrevPageNav: PropTypes.bool,
    hideNextPageNav: PropTypes.bool,
    hideLastPageNav: PropTypes.bool
  })
};
