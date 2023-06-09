import { Injectable } from '@angular/core';
import { State } from './models/state.model';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    new Task(1, 'Task 1', 'Description 1', 'High', 1, State.ToDo, 1),
    new Task(2, 'Task 2', 'Description 2', 'Medium', 2, State.ToDo, 1),
    new Task(3, 'Task 3', 'Description 3', 'Low', 1, State.ToDo, 1)
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(taskId: number): Task | null {
    const index = this.tasks.findIndex(func => func.id === taskId);
    return index > -1 ? this.tasks[index] : null;
  }

  createTask(newTask: Task) {
    this.tasks.push(newTask);
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(func => func.id === updatedTask.id);
    if (index > -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(taskId: number) {
    const index = this.tasks.findIndex(func => func.id === taskId);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
}
