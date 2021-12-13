import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoTaskListComponent } from './todo-task-list/todo-task-list.component';
import { TaskComponent } from './task/task.component';
import {TodoService} from '../app/+service/todo.service';
import { SlotMachineComponent } from './slot-machine/slot-machine.component'
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoTaskListComponent,
    TaskComponent,
    SlotMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
