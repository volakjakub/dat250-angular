import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Todo} from "../interface/todo-interface";
import {TodoWrapperComponent} from "../todo-wrapper/todo-wrapper.component";

@Component({
  selector: 'todo-form',
  styleUrls: ['./todo-form.component.css'],
  template: `
    <form>
      Description: <input type="text" name="description" [formControl]="descriptionControl" required><br />
      Summary: <input type="text" name="summary" [formControl]="summaryControl" required><br />
      <button type="button" (click)="onSubmit()">Add</button>
    </form>
  `
})
export class TodoFormComponent {
  descriptionControl = new FormControl();
  summaryControl = new FormControl();
  TodoWrapper: TodoWrapperComponent;
  todo = <Todo>{};

  constructor(todoWrapper: TodoWrapperComponent) {
    this.TodoWrapper = todoWrapper;
  }

  onSubmit() {
    this.todo.description = this.descriptionControl.value;
    this.todo.summary = this.summaryControl.value;
    this.TodoWrapper.add(this.todo);
  }
}
