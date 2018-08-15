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
});
