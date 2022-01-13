import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FilterEnum } from 'src/app/types/filter.enum';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  activeCount: Observable<number>;
  label: Observable<string>;
  filterEnum = FilterEnum;
  filter$: Observable<FilterEnum>;

  constructor(private todosService: TodosService) {
    this.filter$ = this.todosService.filter$;
    this.activeCount = this.todosService.todos$.pipe(
      map((todos) => todos.length)
    );
    this.label = this.todosService.todos$.pipe(
      map((todos) => {
        if (todos.length === 0) {
          return 'No todos left';
        } else if (todos.length === 1) {
          return 'todo left';
        } else {
          return 'todos left';
        }
      })
    );
  }

  ngOnInit(): void {}

  changeFilter(event: Event, filter: FilterEnum) {
    event.preventDefault();
    // this.activeFilter = filter;
    this.todosService.changeFilter(filter);
  }
}
