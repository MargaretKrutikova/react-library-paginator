import * as React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import Page from "../Page";
import { PaginatorStyles, PaginatorClasses } from "../types";
import styles from "../styles.css";

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
    styles: {}
  };
  render() {
    const {
      currentPage,
      totalPages,
      pagesToShow,
      onPageChange,
      useBootstrapClasses,
      styles: customStyles,
      classes
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
          <Page page={1} isDisabled={isFirstPage} {...pageProps}>
            <span>First</span>
          </Page>

          <Page page={currentPage - 1} isDisabled={isFirstPage} {...pageProps}>
            <span>&larr;</span>
          </Page>

          {pagesToShow.map((page, index) => (
            <Page
              key={index}
              isDisabled={false}
              isActive={page === currentPage}
              page={page}
              {...pageProps}
            />
          ))}

          <Page page={currentPage + 1} isDisabled={isLastPage} {...pageProps}>
            <span>&rarr;</span>
          </Page>
          <Page page={totalPages} isDisabled={isLastPage} {...pageProps}>
            <span>Last</span>
          </Page>
        </ul>
      </nav>
    );
  }
}

export default Paginator;
