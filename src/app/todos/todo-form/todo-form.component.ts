import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { TodosService } from '../todo-service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodosService
  ) {
    this.todoForm = formBuilder.group({
      description: new FormControl(null, [Validators.required]),
      complete: new FormControl(false),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.todoService.addTodos(this.todoForm.value);
    console.log(this.todoForm.value);
  }
}
