import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
})
export class MainComponent implements OnInit {
  public todosData: TodoInterface[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.todos$.subscribe((todos) => {
      console.log(todos);
      this.todosData = todos;
    });
  }
}
