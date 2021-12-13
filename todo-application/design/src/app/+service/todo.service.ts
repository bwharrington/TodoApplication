import { Injectable } from "@angular/core";
import { Task } from "../data/Task";
import {Observable, of} from 'rxjs';

@Injectable()
export class TodoService {
    public getTasks() : Task[] {
        let taskData: Task[] = [];
        taskData = [
            {
              id: "61a27b8c6684aa8ed276fd01",
              name: "Task 1",
              isComplete: true,
              isActive: false
            },
            {
              id: "61a27b8c73f4ce0c81db7bcd",
              name: "Task 2",
              isComplete: true,
              isActive: false
            },
            {
              id: "61a27b8c17d6f0d4bde53207",
              name: "Task 3",
              isComplete: true,
              isActive: false
            },
            {
              id: "61a27b8c3c2191eb1fe13fa3",
              name: "Task 4",
              isComplete: false,
              isActive: true
            },
            {
              id: "61a27b8c77262b8cfab11453",
              name: "Task 5",
              isComplete: false,
              isActive: true
            },
            {
              id: "61a27b8cab75fb3d1dc597ee",
              name: "Task 6",
              isComplete: false,
              isActive: true
            }
          ];

        return taskData;
    }
}