import { Component, OnInit, ViewChild } from "@angular/core";
import { TodoTaskListComponent } from "../todo-task-list/todo-task-list.component";
import { Task } from "../data/Task";
import { TodoConstants } from "../data/todo-constants";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "todo-container",
  templateUrl: "./todo-container.component.html",
  styleUrls: ["./todo-container.component.css"],
})

/* 
  This component is the main application entry point.

  User Opertation on this component are as follows,

  Create a new todo - Adds a new todo to the todo-task-list component with isActive set to true and isComplete set to false by default.

  Filtering - The user can filter a task by 'all', 'active' and 'complete'. These operations are called on the todo-task-list component.

  Clear Complete - The user can remove all completed tasks from the list.

  Task Count - The task count is displayed as how many tasks are current being displayed with filters applied.

  This component also knows if the application is in mobile mode and if it is in dark mode and will let the child components be aware of those states.
*/


export class TodoContainerComponent implements OnInit {
  @ViewChild(TodoTaskListComponent)
  todoTaskListComponent: TodoTaskListComponent;

  public taskCount$: number = 0;
  public isDarkMode: boolean = false;
  public isMobile: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isMobile = this.isMobileDevice();
  }

  public saveTask(event: any): void {
    if (event.keyCode === TodoConstants.ENTER_KEY) {
      let taskName = event?.target?.value;
      let uuid = uuidv4(); //This would really be done on the server and demonstrating the need to manage objects by an id.
      this.todoTaskListComponent.addTask(new Task(uuid, taskName, false, true));
    }
  }

  public getTaskCountFromTaskList(incomingTaskCount$: number): void {
    this.taskCount$ = incomingTaskCount$;
  }

  public allTaskFilter(): void {
    this.todoTaskListComponent.allTaskFilter();
  }

  public activeTaskFilter(): void {
    this.todoTaskListComponent.activeTaskFilter();
  }

  public completedTaskFilter(): void {
    this.todoTaskListComponent.completedTaskFilter();
  }

  public clearCompleted(): void {
    this.todoTaskListComponent.clearCompleted();
  }

  public toggleMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  public getBackgroundImage(): String {
    return this.isDarkMode
      ? TodoConstants.DESKTOP_DARK_BACKGROUND
      : TodoConstants.DESKTOP_LIGHT_BACKGROUND;
  }

  public getBackgroundColor(): String {
    return this.isDarkMode ? TodoConstants.DESKTOP_DARK_BACKGROUND_COLOR 
                           : TodoConstants.DESKTOP_LIGHT_BACKGROUND_COLOR;
  }

  public getBackgroundWidth(): String {
    if (this.isMobileDevice()) {
      return TodoConstants.MOBILE_SCREEN_SIZE;
    } else {
      return TodoConstants.DESKTOP_SCREEN_SIZE;
    }
  }

  private isMobileDevice(): boolean {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  }
}
