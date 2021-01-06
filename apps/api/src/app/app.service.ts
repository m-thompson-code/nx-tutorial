import { Injectable } from '@nestjs/common';

import { Todo } from '@myorg/data';

@Injectable()
export class AppService {
  public todos: Todo[] = [{
    title: 'Todo 1',
  }, {
    title: 'Todo 2',
  }];

  public getData(): Todo[] {
    return this.todos;
  }

  public addTodo(): void {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
