import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';
import { TodosComponent } from '../components/todos/todos.component';
import { todosInMemory } from '../components/todos/todosInMemory';

@Injectable({ providedIn: 'root' })
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>(todosInMemory);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);
  activeFilter: string = 'All';

  constructor() {}

  addTodo(text: string) {
    const newTodo: TodoInterface = {
      id: Math.random().toString().slice(2),
      text,
      isCompleted: false,
    };
    const todos = [...this.todos$.getValue()];
    todos.push(newTodo);
    this.todos$.next(todos);
    console.log(this.todos$.getValue());
  }

  changeFilter(filter: FilterEnum) {
    this.activeFilter = filter;
    this.filter$.next(filter);
  }

  deleteTodo(id: string) {
    const todos = [...this.todos$.getValue()];
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    this.todos$.next(todos);
  }

  toogleTodo(id: string) {
    const todos = [...this.todos$.getValue()].map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    this.todos$.next(todos);
  }

  toggleAllTodos(isCompleted: boolean) {
    const todos = [...this.todos$.getValue()].map((todo) => {
      todo.isCompleted = isCompleted;
      return todo;
    });
    this.todos$.next(todos);
  }
  editTodo(text: string, id: string) {
    const todos = [...this.todos$.getValue()].map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    this.todos$.next(todos);
  }
}
