import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';

interface Todo {
  title: string;
}

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public todos: Todo[] = [];

  private _sub?: Subscription;
  private _sub2?: Subscription;

  constructor(private httpClient: HttpClient) {
  }

  public ngOnInit(): void {
    this._sub = this.fetch();
  }

  public fetch(): Subscription {
    this._sub?.unsubscribe();

    return this.httpClient.get<Todo[]>('').subscribe(todos => {
      this.todos = todos;
    });
  }

  public addTodo(): void {
    this._sub2 = this.httpClient.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }

  public ngOnDestroy(): void {
    this._sub?.unsubscribe();
    this._sub2?.unsubscribe();
  }
}
