import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todos: Todo[] = [
    {
      description: 'learn angular',
      completed: false,
    },
  ];
  constructor() {}

  addTodos(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }
  getTodos() {
    return this.todos;
  }
  deleteTodo(id: number) {
    this.todos.splice(id, 1);
    console.log(this.todos);
  }
  completeTodo(id: number) {
    this.todos[id].completed = true;
  }
}
