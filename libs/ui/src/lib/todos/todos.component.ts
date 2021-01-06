import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '@myorg/data';

@Component({
  selector: 'myorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  // constructor() { }

  public ngOnInit(): void {
    // Just adding this here to avoid lint error about declaring empty ngOnInit
    this.todos = this.todos || [];
  }
}
