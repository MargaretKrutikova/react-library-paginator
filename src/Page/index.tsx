import * as React from "react";
import * as PropTypes from "prop-types";

export type PropType = {
  isActive?: boolean;
  isDisabled: boolean;
  page: number;
  children?: React.ReactNode;
  onPageChange: (page: number) => void;
};

class Page extends React.PureComponent<PropType> {
  static propTypes = {
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    page: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
  };
  setPage = (event: React.MouseEvent<HTMLElement>, page: number) => {
    if (event) {
      event.preventDefault();
    }
    if (!this.props.isDisabled && this.props.isActive) {
      this.props.onPageChange(page);
    }
  };
  getPageClass = () => {
    const classes = ["page-item"];
    this.props.isActive && classes.push("active");
    this.props.isDisabled && classes.push("disabled");

    return classes.join(" ");
  };
  render() {
    const { page } = this.props;

    return (
      <li className={this.getPageClass()}>
        <a
          href="#"
          className="page-link"
          onClick={event => this.setPage(event, page)}
        >
          {this.props.children || page}
        </a>
      </li>
    );
  }
}

export default Page;
