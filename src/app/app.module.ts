import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './my_components/todos/todos.component';
import { TodoItemComponent } from './my_components/todo-item/todo-item.component';
import { AddTodoComponent } from './my_components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponentComponent } from './my_components/about-component/about-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
