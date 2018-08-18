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
} & Partial<DefaultProps>;

type DefaultProps = {
  currentPage: number | null;
  itemsPerPage: number | null;
  maxPagesToShow: number | null;
  useBootstrapClasses: boolean | null;
  styles: PaginatorStyles | null;
  classes: PaginatorClasses | null;
  navigation: Navigation | null;
};

const PaginatorContainer: React.StatelessComponent<Props> = (props: Props) => {
  const {
    currentPage,
    itemsPerPage,
    maxPagesToShow,
    totalItems,
    useBootstrapClasses,
    navigation,
    ...rest
  } = props;

  const paginator = PaginatorService.getPaginator({
    totalItems,
    currentPage: currentPage!,
    itemsPerPage: itemsPerPage!,
    maxPagesToShow: maxPagesToShow!
  });

  return (
    <Paginator
      useBootstrapClasses={useBootstrapClasses!}
      navigation={navigation!}
      {...paginator}
      {...rest}
    />
  );
};

PaginatorContainer.defaultProps = {
  currentPage: 1,
  itemsPerPage: 10,
  maxPagesToShow: 3,
  useBootstrapClasses: false,
  styles: {},
  classes: {},
  navigation: {}
};

PaginatorContainer.propTypes = {
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

export default PaginatorContainer;
