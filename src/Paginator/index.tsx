import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Page from '../Page';
import { PaginatorStyles, PaginatorClasses, Navigation } from '../types';
import styles from '../styles.css';

type Props = {
  currentPage: number;
  totalPages: number;
  pagesToShow: number[];
  onPageChange: (page: number) => void;
  useBootstrapClasses: boolean;
} & Partial<DefaultProps>;

type DefaultProps = {
  styles: PaginatorStyles | null;
  classes: PaginatorClasses | null;
  navigation: Navigation;
};

class Paginator extends React.PureComponent<Props> {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    pagesToShow: PropTypes.arrayOf(PropTypes.number).isRequired,
    onPageChange: PropTypes.func.isRequired
  };
  static defaultProps: DefaultProps = {
    classes: {},
    styles: {},
    navigation: {}
  };
  render() {
    const {
      currentPage,
      totalPages,
      pagesToShow,
      onPageChange,
      useBootstrapClasses,
      styles: customStyles,
      classes,
      navigation = {}
    } = this.props;

    const isFirstPage = currentPage === 1,
      isLastPage = currentPage === totalPages;

    const pageProps = {
      styles: customStyles,
      classes,
      onPageChange,
      useBootstrapClasses
    };

    return (
      <nav
        aria-label="Page navigation"
        style={customStyles!.container}
        className={classNames(
          { paginator: useBootstrapClasses },
          classes!.container
        )}
      >
        <ul
          style={customStyles!.list}
          className={classNames(
            [styles.rlPaginationBase],
            { paginaton: useBootstrapClasses },
            [classes!.list || styles.rlPagination]
          )}
        >
          {!navigation.hideFirstPageNav && (
            <Page page={1} isDisabled={isFirstPage} {...pageProps}>
              <span>{navigation.firstPageText || 'First'}</span>
            </Page>
          )}

          {!navigation.hidePrevPageNav && (
            <Page
              page={currentPage - 1}
              isDisabled={isFirstPage}
              {...pageProps}
            >
              <span>{navigation.prevPageText || '←'}</span>
            </Page>
          )}
          {pagesToShow.map((page, index) => (
            <Page
              key={index}
              isDisabled={false}
              isActive={page === currentPage}
              page={page}
              {...pageProps}
            />
          ))}

          {!navigation.hideNextPageNav && (
            <Page page={currentPage + 1} isDisabled={isLastPage} {...pageProps}>
              <span>{navigation.nextPageText || '→'}</span>
            </Page>
          )}
          {!navigation.hideLastPageNav && (
            <Page page={totalPages} isDisabled={isLastPage} {...pageProps}>
              <span>{navigation.lastPageText || 'Last'}</span>
            </Page>
          )}
        </ul>
      </nav>
    );
  }
}

export default Paginator;
