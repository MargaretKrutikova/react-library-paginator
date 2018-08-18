import * as React from 'react';
import * as Enzyme from 'enzyme';

import PaginatorService from './PaginatorService';
import PaginatorContainer from '.';

describe('PaginatorContainer', () => {
  it('should call PaginatorService.getPaginator on init and when updating props', () => {
    PaginatorService.getPaginator = jest.fn(() => ({
      currentPage: 1,
      totalPages: 2,
      pagesToShow: [1, 2]
    }));
    const testProps = {
      totalItems: 200,
      onPageChange: () => {}
    };
    const component = Enzyme.shallow(<PaginatorContainer {...testProps} />);

    expect(PaginatorService.getPaginator).toHaveBeenCalledTimes(1);

    // change props
    component.setProps({ totalItems: 250 });
    expect(PaginatorService.getPaginator).toHaveBeenCalledTimes(2);
  });
});
