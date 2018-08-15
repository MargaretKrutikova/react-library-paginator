/**
 * @class PaginatorContainer
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import Paginator from "./Paginator";
import PaginatorService from "./PaginatorService";

import styles from "./styles.css";

export type Props = {
  totalItems: number;
  onPageChange: (page: number) => void;
} & Partial<DefaultProps>;

type DefaultProps = {
  currentPage: number | null;
  itemsPerPage: number | null;
  maxPagesToShow: number | null;
};

const defaultProps: DefaultProps = {
  currentPage: 1,
  itemsPerPage: 10,
  maxPagesToShow: 3
};

const PaginatorContainer: React.StatelessComponent<Props> = (props: Props) => {
  const {
    onPageChange,
    currentPage,
    itemsPerPage,
    maxPagesToShow,
    totalItems
  } = props;

  const paginator = PaginatorService.getPaginator({
    totalItems,
    currentPage: currentPage!,
    itemsPerPage: itemsPerPage!,
    maxPagesToShow: maxPagesToShow!
  });

  return <Paginator onPageChange={onPageChange} {...paginator} />;
};

PaginatorContainer.defaultProps = defaultProps;

PaginatorContainer.propTypes = {
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number,
  maxPagesToShow: PropTypes.number
};

export default PaginatorContainer;
