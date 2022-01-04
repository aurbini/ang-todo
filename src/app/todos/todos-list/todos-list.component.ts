import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todo-service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];
  currentTodo: string = '';
  constructor(
    private todoService: TodosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    console.log(this.route.snapshot);
  }
  onDelete(id: number) {
    this.todoService.deleteTodo(id);
  }
  onComplete(id: number) {
    this.todoService.completeTodo(id);
  }
}
