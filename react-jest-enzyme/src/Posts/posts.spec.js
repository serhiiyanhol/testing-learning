import React from "react";
import Posts from "./index";

describe("Posts component", () => {
  it("should shallow Post component", () => {
    const component = shallow(<Posts />);
    expect(component).toMatchSnapshot();
  });

  it("should render Post component", () => {
    const component = render(<Posts />);
    expect(component).toMatchSnapshot();
  });

  it("should mount Post component", () => {
    const component = mount(<Posts />);
    expect(component).toMatchSnapshot();
  });
});
