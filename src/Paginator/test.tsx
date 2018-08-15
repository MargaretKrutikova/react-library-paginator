import * as React from "react";
import * as Enzyme from "enzyme";
import Paginator from ".";
import Page from "../Page";

describe("Paginator", () => {
  const testProps = {
    currentPage: 4,
    totalPages: 10,
    pagesToShow: [1, 2, 3, 4],
    onPageChange: jest.fn()
  };

  it(" renders all pages to show with active page", () => {
    const wrapper = Enzyme.shallow(<Paginator {...testProps} />);

    const createPageElement = (page: number, isActive: boolean) => (
      <Page
        onPageChange={testProps.onPageChange}
        isActive={isActive}
        isDisabled={false}
        page={page}
      />
    );
    const pagesToShowChildren = testProps.pagesToShow.map(page =>
      createPageElement(page, page === testProps.currentPage)
    );
    expect(wrapper.containsAllMatchingElements(pagesToShowChildren)).toBe(true);
  });

  it(" matches snapshot", () => {
    const wrapper = Enzyme.shallow(<Paginator {...testProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
