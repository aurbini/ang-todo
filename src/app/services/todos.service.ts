import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TodoInterface } from '../types/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>([]);

  constructor() {}

  addTodo(newTodo: TodoInterface) {
    const todos = this.todos$.getValue();
    todos.push(newTodo);
    this.todos$.next(todos);
    console.log(this.todos$.getValue());
  }
}
