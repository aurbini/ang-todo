import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  setTodos() {}
}
