import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';

import { map } from 'rxjs';
@Component({
  selector: 'app-todos-footer',
  templateUrl: 'footer.component.html',
})
export class FooterComponent {
  noTodoClass$: Observable<boolean>;
  activeCount$: Observable<number>;
  itemsLeftText$: Observable<string>;
  filterEnum = FilterEnum;
  filter$: Observable<FilterEnum>;
  constructor(private todoService: TodosService) {
    this.activeCount$ = this.todoService.todos$.pipe(
      map((todos) => todos.filter((todo) => !todo.isCompleted).length)
    );
    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item ${activeCount !== 1 ? 's' : ''} left`)
    );

    this.noTodoClass$ = this.todoService.todos$.pipe(
      map((todos) => todos.length === 0)
    );
    this.filter$ = this.todoService.filter$;
  }

  changedFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();

    this.todoService.changeFilter(filterName);
  }
}
