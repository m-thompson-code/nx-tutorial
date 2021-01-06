import { getTodos, getAddTodoButton } from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    // Expect 2 at first
    getTodos().should((t) => {
      return expect(t.length).equal(2);
    });

    // Add one more
    getAddTodoButton().click();

    // Expect 3 now
    getTodos().should((t) => {
      return expect(t.length).equal(3);
    });
  });
});
