import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TodosComponent} from './todos-components/todos.component';
import {TodoComponent} from './todos-components/todo/todo.component';
import {HttpClientModule} from "@angular/common/http";
import {TodoDataService} from "./todos-service/todo-data.service";


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule
  ],
  providers: [TodoDataService]
})
export class TodoModule {
}
