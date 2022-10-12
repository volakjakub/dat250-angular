import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Todos} from "../interface/todos-interface";
import {Todo} from "../interface/todo-interface";

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css']
})
@Injectable()
export class TodoWrapperComponent implements OnInit {
  Todos: Todos | null | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  get todos(): Todos | null | undefined {
    return this.Todos;
  }

  add(newTodo: Todo): void {
    this.addTodo(newTodo).subscribe(todo => {
      this.Todos?.push(todo);
    });
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('/todos', todo);
  }

  delete(id: number): void {
    this.deleteTodo(id).subscribe();
    this.loadTodos();
  }

  deleteTodo(id: number): Observable<HttpResponse<Object>> {
    return this.http.delete('/todos/'+id, { observe: 'response' });
  }

  loadTodos(): void {
    this.http.get<Todos>('/todos', { observe: 'response' }).subscribe(resp => {
      this.Todos = resp.body;
    });
  }

}
