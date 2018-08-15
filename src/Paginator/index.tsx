import * as React from "react";
import * as PropTypes from "prop-types";
import Page from "../Page";

type PropType = {
  currentPage: number;
  totalPages: number;
  pagesToShow: number[];
  onPageChange: (page: number) => void;
};

class Paginator extends React.PureComponent<PropType> {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    pagesToShow: PropTypes.arrayOf(PropTypes.number).isRequired,
    onPageChange: PropTypes.func.isRequired
  };
  render() {
    const { currentPage, totalPages, pagesToShow, onPageChange } = this.props;
    const isFirstPage = currentPage === 1,
      isLastPage = currentPage === totalPages;

    return (
      <nav aria-label="Page navigation" className="paginator">
        <ul className="pagination justify-content-center">
          <Page {...{ onPageChange, page: 1, isDisabled: isFirstPage }}>
            <span>First</span>
          </Page>

          <Page
            {...{
              onPageChange,
              page: currentPage - 1,
              isDisabled: isFirstPage
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </Page>

          {pagesToShow.map((page, index) => (
            <Page
              key={index}
              isDisabled={false}
              {...{ onPageChange, page, isActive: page === currentPage }}
            />
          ))}

          <Page
            {...{ onPageChange, page: currentPage + 1, isDisabled: isLastPage }}
          >
            <span aria-hidden="true">&raquo;</span>
          </Page>
          <Page {...{ onPageChange, page: totalPages, isDisabled: isLastPage }}>
            <span>Last</span>
          </Page>
        </ul>
      </nav>
    );
  }
}

export default Paginator;
