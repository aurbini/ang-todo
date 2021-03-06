import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  text: string = '';
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.text = event.target.value;
  }

  addTodo() {
    const newTodo: TodoInterface = {
      id: Math.random().toString().slice(2),
      text: this.text,
      isCompleted: false,
    };
    this.todosService.addTodo(newTodo);
  }
}
