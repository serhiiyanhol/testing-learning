import React from 'react';
import Select from './index';

const props = {
  options: [
    { value: 0, label: 'Label' },
    { value: 1, label: 'Another Label' },
  ],
  value: 0,
  handleChange: () => {
  },
};

const setUp = props => shallow(<Select {...props} />);

describe('Select component:', () => {
  describe('has props:', () => {
    const component = setUp(props);

    it('should have select', function () {
      const select = component.find('select');
      expect(select).toHaveLength(1);
    });

    it('should have 2 options', function () {
      const select = component.find('option');
      expect(select).toHaveLength(2);
    });
  });

  describe('has no props:', () => {
    const component = setUp();

    it('should have placeholder', function () {
      const div = component.find('.placeholder');
      expect(div).toHaveLength(1);
    });
  });

  describe('defaultProps:', () => {
    it('should use default handleChange func', function () {
      const result = Select.defaultProps.handleChange();
      expect(result).toBeUndefined();
    });
  });
});
