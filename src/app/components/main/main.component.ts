import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, map } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
})
export class MainComponent {
  visibleTodos$: Observable<TodoInterface[]>;
  noTodoClass: Observable<boolean>;
  editingId: string | null = null;
  isAllTodosCompleted: Observable<boolean>;

  constructor(private todosService: TodosService) {
    this.isAllTodosCompleted = todosService.todos$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted))
    );

    this.noTodoClass = todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );
    this.visibleTodos$ = combineLatest(
      this.todosService.todos$,
      this.todosService.filter$
    ).pipe(
      map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
        console.log(FilterEnum);
        console.log(FilterEnum.all);
        if (filter === FilterEnum.active) {
          return todos.filter((todo) => !todo.isCompleted);
        } else if (filter === FilterEnum.completed) {
          return todos.filter((todo) => todo.isCompleted);
        } else {
          return todos;
        }
        return [];
      })
    );
  }

  setEditingId(editingId: string | null): void {
    console.log('todoedit');
    this.editingId = editingId;
  }

  toggleAllTodos(event: Event): void {
    const isCompleted: boolean = (event.target as HTMLInputElement).checked;
    this.todosService.toggleAllTodos(isCompleted);
  }
}
