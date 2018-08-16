import * as React from "react";
import * as PropTypes from "prop-types";
import { PageStyles, PageClasses } from "../types";
import classNames from "classnames";

import styles from "../styles.css";

export type PropType = {
  isActive?: boolean;
  isDisabled: boolean;
  page: number;
  children?: React.ReactNode;
  onPageChange: (page: number) => void;
} & Partial<DefaultProps>;

type DefaultProps = {
  useBootstrapClasses: boolean | null;
  styles: PageStyles | null;
  classes: PageClasses | null;
};

class Page extends React.PureComponent<PropType> {
  static propTypes = {
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    page: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
  };
  static defaultProps: DefaultProps = {
    classes: {},
    styles: {},
    useBootstrapClasses: true
  };
  setPage = (event: React.MouseEvent<HTMLElement>, page: number) => {
    if (event) {
      event.preventDefault();
    }
    if (!this.props.isDisabled && !this.props.isActive) {
      this.props.onPageChange(page);
    }
  };
  render() {
    const { page, isActive, isDisabled, useBootstrapClasses } = this.props;
    const {
      pageItem,
      pageLink,
      pageLinkActive,
      pageLinkDisabled
    } = this.props.classes!;

    const customStyles = this.props.styles!;
    const pageLinkStyles = {
      ...customStyles.pageLink,
      ...(isActive ? customStyles.pageLinkActive : {}),
      ...(isDisabled ? customStyles.pageLinkDisabled : {})
    };

    return (
      <li
        className={classNames({ "page-item": useBootstrapClasses }, [pageItem])}
        style={customStyles.pageItem}
      >
        <a
          href="#"
          className={classNames(
            styles.rlPageLink,
            { "page-link": useBootstrapClasses },
            pageLink,
            {
              [`${styles.active} active ${pageLinkActive}`]: isActive,
              [`disabled ${pageLinkDisabled}`]: isDisabled
            }
          )}
          style={pageLinkStyles}
          onClick={event => this.setPage(event, page)}
        >
          {this.props.children || page}
        </a>
      </li>
    );
  }
}

export default Page;
