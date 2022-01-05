import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoInterface } from '../../types/todo.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-todos-main',
  templateUrl: 'main.component.html',
})
export class MainComponent implements OnInit {
  visibleTodos$: Observable<TodoInterface[]>;
  noTodoClass$: Observable<boolean>;
  isAllTodoSelected$: Observable<boolean>;
  editingId: string | null = null;

  constructor(private todoService: TodosService) {
    this.isAllTodoSelected$ = this.todoService.todos$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted))
    );
    this.noTodoClass$ = this.todoService.todos$.pipe(
      map((todos) => todos.length === 0)
    );
    this.visibleTodos$ = combineLatest(
      this.todoService.todos$,
      this.todoService.filter$
    ).pipe(
      map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
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

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.todoService.toogleAll(target.checked);
  }

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }
  ngOnInit() {}
}
