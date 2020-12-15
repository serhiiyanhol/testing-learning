import React from "react";
import Posts from "./index";

const setUp = () => shallow(<Posts />);

describe("Posts component", () => {
  const DEFAULT_PAGE = 10;
  let component;
  let instance;

  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });

  it("should shallow Post component", () => {
    expect(component).toMatchSnapshot();
  });

  describe('Posts handlers: ', () => {
    it('should handle search input value', () => {
      expect(component.state().searchQuery).toBe('');
      instance.handleInputChange({ target: { value: 'test' } });
      expect(component.state().searchQuery).toBe('test');
    });

    it('should handle hits value', () => {
      expect(component.state().hitsPerPage).toBe(20);
      instance.handleHitsChange({ target: { value: String(DEFAULT_PAGE) } }); // returns string value from select
      expect(component.state().hitsPerPage).toBe(DEFAULT_PAGE);
    });

    it('should handle change page on "Enter" pressed', () => {
      instance.setState({ page: DEFAULT_PAGE });
      instance.getSearch({ key: 'Enter' });
      expect(component.state().page).toBe(0);
    });

    it('should not change page on "a" pressed', () => {
      instance.setState({ page: DEFAULT_PAGE });
      instance.getSearch({ key: 'a' });
      expect(component.state().page).toBe(DEFAULT_PAGE);
    });
  });
});
