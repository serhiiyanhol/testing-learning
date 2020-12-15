const axios = require('axios');
const Ajax = require('./async');

jest.mock('axios');

describe('Ajax: echo()', () => {
  test('should return value async', async () => {
    const string = 'some data';
    const result = await Ajax.echo(string);
    expect(result).toBe(string);
  });

  test('should return value with promise', () => {
    const string = 'some data';
    return Ajax.echo(string).then(data => {
      expect(data).toBe(string);
    });
  });

  test('should catch error with promise', () => {
    return Ajax.echo().catch(error => {
      expect(error).toBeInstanceOf(Error);
    });
  });

  test('should catch error async', async () => {
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toBe('error');
    }
  });
});

describe('Ajax: get()', () => {
  let response;
  let todos;

  beforeEach(() => {
    todos = [{
      id: 1,
      title: 'todo 1',
      completed: false,
    }];

    response = {
      data: { todos }
    };
  });

  test('should return data from backend', () => {
    axios.get.mockReturnValue(response);

    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos);
    });
  });
});
