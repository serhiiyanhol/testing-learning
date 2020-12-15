import React from 'react';
import Title from "./index";

describe('Title component:', () => {
  it('should render with props', () => {
    const component = shallow(<Title title="Test title" />);
    expect(component).toMatchSnapshot();
  });

  it('should render without props', () => {
    const component = shallow(<Title />);
    expect(component).toMatchSnapshot();
  });
});
