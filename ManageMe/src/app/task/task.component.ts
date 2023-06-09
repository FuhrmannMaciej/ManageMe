import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  tasks: Task[];

  constructor(
    private router: Router,
    private taskService: TaskService
    ) {
      this.tasks = this.taskService.getTasks();
  }

  createTask() {
    this.router.navigate(['/project', 1, 'task', 'create']);
  }

  updateTask(task: Task) {
    this.router.navigate(['/project', task.projectId, 'task', task.id, 'update']);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id);
  }

  showTaskDetails(task: Task) {
    this.router.navigate(['/project', task.projectId, 'task', task.id]);
    }
    
    goBack() {
      this.router.navigate(['/project']);
    }
}
