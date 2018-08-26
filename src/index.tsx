/**
 * @class PaginatorContainer
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import Paginator from './Paginator';
import PaginatorService from './PaginatorService';
import {
  PaginatorStyles,
  PaginatorClasses,
  Navigation,
  CustomPropTypes
} from './types';

export type Props = {
  totalItems: number;
  onPageChange: (page: number) => void;
} & DefaultProps;

type DefaultProps = {
  currentPage: number;
  itemsPerPage: number;
  maxPagesToShow: number;
  useBootstrapClasses: boolean;
  styles: PaginatorStyles;
  classes: PaginatorClasses;
  navigation: Navigation;
};

class PaginatorContainer extends React.Component<Props> {
  static defaultProps = {
    currentPage: 1,
    itemsPerPage: 10,
    maxPagesToShow: 3,
    useBootstrapClasses: false,
    styles: {},
    classes: {},
    navigation: {}
  };
  static propTypes = {
    totalItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
    itemsPerPage: PropTypes.number,
    maxPagesToShow: PropTypes.number,
    useBootstrapClasses: PropTypes.bool,
    styles: CustomPropTypes.styles,
    classes: CustomPropTypes.classes,
    navigation: CustomPropTypes.navigation
  };
  render() {
    const {
      currentPage,
      itemsPerPage,
      maxPagesToShow,
      totalItems,
      ...rest
    } = this.props;

    const paginator = PaginatorService.getPaginator({
      totalItems,
      currentPage,
      itemsPerPage,
      maxPagesToShow
    });

    return <Paginator {...paginator} {...rest} />;
  }
}

export default PaginatorContainer;
