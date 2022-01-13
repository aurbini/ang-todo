import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';
import { Event } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input('isEditing') isEditingProps: boolean = false;
  @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> =
    new EventEmitter();

  @Input() todoProps!: TodoInterface;
  @ViewChild('textInput') textInput!: ElementRef;
  editingText: string = '';
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.editingText = this.todoProps.text;
  }

  deleteTodo(id: string): void {
    console.log('deleteTodo');
    this.todosService.deleteTodo(id);
  }

  completeTodo(id: string): void {
    console.log('completeTodo');
  }

  resetEditingMode(): void {
    this.setEditingIdEvent.emit(null);
  }

  setTodoInEditMode(): void {
    console.log('setTodoEditMode');
    this.setEditingIdEvent.emit(this.todoProps.id);
  }

  changeText(event: any): void {
    // const value = (event.target as HTMLInputElement).value;
    this.editingText = event.target.value;
    console.log('changeText');
  }

  toggleTodo(): void {
    console.log('toggleTodo');
    this.todosService.toogleTodo(this.todoProps.id);
  }
  changeTodo(): void {
    console.log('change todo');
    this.todosService.editTodo(this.editingText, this.todoProps.id);
    this.resetEditingMode();
  }
}
