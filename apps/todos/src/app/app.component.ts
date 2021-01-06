import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';

import { Todo } from '@myorg/data';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public todos: Todo[] = [];

  private _sub?: Subscription;// Not really needed since the subscriptions should set completed/finished to true and no longer be active, but these subscriptions could still lead to a race condition, and why not
  private _sub2?: Subscription;// Not really needed since the subscriptions should set completed/finished to true and no longer be active, but these subscriptions could still lead to a race condition, and why not

  constructor(private httpClient: HttpClient) {
  }

  public ngOnInit(): void {
    this._sub = this.fetch();
  }

  public fetch(): Subscription {
    this._sub?.unsubscribe();

    return this.httpClient.get<Todo[]>('/updated-api/todos').subscribe(todos => {
      this.todos = todos;
    });
  }

  public addTodo(): void {
    this._sub2?.unsubscribe();

    this._sub2 = this.httpClient.post('/updated-api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }

  public ngOnDestroy(): void {
    this._sub?.unsubscribe();
    this._sub2?.unsubscribe();
  }
}
