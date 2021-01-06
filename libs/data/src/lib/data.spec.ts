import { Todo } from './data';
describe('Todo', () => {
  it('should have string for title', () => {
      const todo: Todo = {
        title: 'some string',
      };

      expect(todo.title).toEqual('some string');
    });
  // We removed this exported method in an earlier step in the tutorial, so this test is invalid
  // it('should work', () => {
  //   expect(data()).toEqual('data');
  // });
});
