import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Functionality } from '../models/functionality.model';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';
import { FunctionalityService } from '../functionality.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  task: Task | null;
  tasks: Task[] = [];
  functionality: Functionality | null;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private functionalityService: FunctionalityService
    ) {
      const taskIdParam = this.route.snapshot.paramMap.get('taskId');
      this.task = this.taskService.getTask(taskIdParam ? +taskIdParam : 0);
      this.functionality = this.functionalityService.getFunctionality(this.task?.functionalityId || 0);
      console.log(this.functionality?.id);
  }

  goBack() {
    window.history.back();
  }

}
