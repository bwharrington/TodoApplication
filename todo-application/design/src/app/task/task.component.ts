import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Task } from "../data/Task";

@Component({
  selector: "task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})

/*
  This represents a single task as part of a list of tasks in the todo-task-list component.
  A task can active and/or complete.
  A task can be deleted.

  User Opertation on a task are as follows,
  
  Marked as Complete - The task objects boolean IsComplete has its value switched. If a user checks a task that is complete it will be not complete and vice versa.
  This event is pushed back up to the parent component todo-task-list.

  Delete - Removes the task entirely from the list. This is also pushed up to the parent component todo-task-list.

  This component will also recognize if the application is in dark mode and apply styling as such.

*/

export class TaskComponent implements OnInit {
  @Input("name")
  name: String = "";

  @Input("isComplete")
  isComplete: boolean = false;

  @Input("isActive")
  isActive: boolean = false;

  @Input("isDarkMode")
  isDarkMode: boolean = false;

  @Output()
  deletedTask: EventEmitter<Task> = new EventEmitter();

  @Output()
  markAsComplete: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public deleteTask(event: any): void {
    this.deletedTask.emit(event);
  }

  public setMarkAsComplete(event: any): void {
    this.markAsComplete.emit(event);
  }
}