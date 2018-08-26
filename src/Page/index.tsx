import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PageStyles, PageClasses } from '../types';
import classNames from 'classnames';

import styles from '../styles.css';

export type PropType = {
  isActive?: boolean;
  isDisabled: boolean;
  page: number;
  onPageChange: (page: number) => void;
  useBootstrapClasses: boolean;
} & DefaultProps;

type DefaultProps = {
  styles: PageStyles;
  classes: PageClasses;
};

class Page extends React.PureComponent<PropType> {
  static defaultProps: DefaultProps = {
    classes: {},
    styles: {}
  };
  static propTypes = {
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
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
    } = this.props.classes;

    const customStyles = this.props.styles;

    const pageLinkStyles = {
      ...customStyles.pageLink,
      ...(isActive ? customStyles.pageLinkActive : {}),
      ...(isDisabled ? customStyles.pageLinkDisabled : {}),
      ...(useBootstrapClasses && { boxShadow: 'none' })
    };

    return (
      <li
        className={classNames(
          useBootstrapClasses && {
            'page-item': true,
            active: isActive,
            disabled: isDisabled
          },
          [pageItem]
        )}
        style={customStyles.pageItem}
      >
        <a
          href="#"
          className={classNames(
            styles.rlPageLinkBase,
            pageLink,
            !useBootstrapClasses
              ? {
                  [styles.rlPageLinkBaseActive]: isActive,
                  [styles.rlPageLinkBaseDisabled]: isDisabled,
                  [pageLink || styles.rlPageLink]: true,
                  [pageLinkActive || styles.rlPageLinkActive]: isActive,
                  [pageLinkDisabled || styles.rlPageLinkDisable]: isDisabled
                }
              : 'page-link'
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
