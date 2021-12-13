import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { TodoService } from "../+service/todo.service";
import { Task } from "../data/Task";

@Component({
  selector: "todo-task-list",
  templateUrl: "./todo-task-list.component.html",
  styleUrls: ["./todo-task-list.component.css"],
})

/* 
  This component is centeral location for for tasks. I knows about all the tasks in the application and reads them from the "server".

  The master task list is contained in taskData.
  The filtered list is in filteredTaskData and uses taskData to produce the result.

  Operations from the parent component todo-container and the child component task are handled by this component so it can manipulate the master task list
  and displayed modified tasks as such.
*/


export class TodoTaskListComponent implements OnInit {
  public taskData: Task[] = [];
  public filteredTaskData: Task[] = [];

  @Input("isDarkMode")
  isDarkMode: boolean = false;

  @Output()
  getTaskCount: EventEmitter<number> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.taskData = this.todoService.getTasks();
    this.filteredTaskData = this.todoService.getTasks();
    this.getTaskCount.emit(this.taskData.length);
  }

  public onTaskDeleted(task: Task): void {
    this.taskData.forEach((value, index) => {
      if (task.id == value.id) {
        this.taskData.splice(index, 1);
      }
    });

    this.filteredTaskData = this.taskData;
    this.emitTaskCount();
  }

  public onMarkAsCompleted(task: Task): void {
    let taskIndex = this.taskData.findIndex((obj) => obj.id == task.id);
    this.taskData[taskIndex].isComplete = !this.taskData[taskIndex].isComplete;
    this.filteredTaskData = this.taskData;
  }

  public addTask(task: Task): void {
    this.taskData.push(task);
    this.filteredTaskData = this.taskData;
    this.emitTaskCount();
  }

  public allTaskFilter(): void {
    this.filteredTaskData = this.taskData;
    this.emitTaskCount();
  }

  public activeTaskFilter(): void {
    this.filteredTaskData = this.taskData.filter((item) => item.isActive);
    this.emitTaskCount();
  }

  public completedTaskFilter(): void {
    this.filteredTaskData = this.taskData.filter((item) => item.isComplete);
    this.emitTaskCount();
  }

  public clearCompleted(): void {
    this.taskData = this.taskData.filter((item) => item.isComplete === false);
    this.filteredTaskData = this.taskData;
    this.emitTaskCount();
  }

  private emitTaskCount(): void {
    this.getTaskCount.emit(this.filteredTaskData.length);
  }
}
