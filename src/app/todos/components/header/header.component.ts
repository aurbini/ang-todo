import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-todos-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit {
  text: string = '';

  constructor(private todosService: TodosService) {
    this.todosService.todos$.subscribe((todos) => {
      console.log(todos);
    });
  }

  ngOnInit() {}

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
    console.log(target.value);
  }
  addTodo(): void {
    this.todosService.addTodo(this.text);
    this.text = '';
  }
}
