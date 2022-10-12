import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoWrapperComponent } from './todo-wrapper/todo-wrapper.component';

const routes: Routes = [
  { path: 'todo', component: TodoWrapperComponent, data: {type: "static"} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
