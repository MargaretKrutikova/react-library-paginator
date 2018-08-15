import * as React from "react";
import * as Enzyme from "enzyme";
import Page, { PropType } from ".";

describe("Page", () => {
  it("it changes classes if isActive or isDisabled props change", () => {
    const testProps: PropType = {
      isActive: false,
      isDisabled: false,
      page: 4,
      // tslint:disable-next-line:no-empty
      onPageChange: (_: number) => {}
    };
    const component: Enzyme.ShallowWrapper = Enzyme.shallow(
      <Page {...testProps} />
    );

    expect(component).toMatchSnapshot();

    // change props and rerender
    component.setProps({ isActive: true });
    expect(component).toMatchSnapshot();

    // change props and rerender
    component.setProps({ isActive: false });
    component.setProps({ isDisabled: true });
    expect(component).toMatchSnapshot();
  });

  it(" calls onPageChange with current page if page is not disabled and not active", () => {
    const mockCallback = jest.fn();
    const testProps: PropType = {
      isActive: false,
      isDisabled: false,
      page: 4,
      onPageChange: (page: number) => mockCallback(page)
    };
    const component: Enzyme.ShallowWrapper = Enzyme.shallow(
      <Page {...testProps} />
    );

    component.find("a").simulate("click");

    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe(4);
  });

  it(" doesn't call onPageChange if page is disabled or active", () => {
    const mockCallback = jest.fn();
    const testProps: PropType = {
      isActive: true,
      isDisabled: false,
      page: 4,
      onPageChange: (page: number) => mockCallback(page)
    };
    const component: Enzyme.ShallowWrapper = Enzyme.shallow(
      <Page {...testProps} />
    );

    component.find("a").simulate("click");
    expect(mockCallback.mock.calls.length).toBe(0);

    component.setProps({ isActive: false, isDisabled: true });
    component.find("a").simulate("click");
    expect(mockCallback.mock.calls.length).toBe(0);
  });
});
