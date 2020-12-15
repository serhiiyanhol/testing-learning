import React from 'react';
import Input from "./index";

describe('Input component:', () => {
  it('should render', function () {
    const component = shallow(<Input />);
    expect(component).toMatchSnapshot();
  });

  describe('defaultProps', () => {
    it('should use default onChange', function () {
      const result = Input.defaultProps.onChange();
      expect(result).toBeUndefined();
    });
    it('should use default onKeyPress', function () {
      const result = Input.defaultProps.onKeyPress();
      expect(result).toBeUndefined();
    });
  });
});
