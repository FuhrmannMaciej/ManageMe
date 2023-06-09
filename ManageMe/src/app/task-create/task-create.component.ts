import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { State } from '../models/state.model';
import { TaskService } from '../task.service';
import { Functionality } from '../models/functionality.model';
import { FunctionalityService } from '../functionality.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent {
  @Input() task: Task = new Task(0, '', '', '',1, State.ToDo, 1);
  states: string[] = Object.values(State);
  functionalities: Functionality[];

  constructor(private taskService: TaskService, private functionalityService: FunctionalityService, private router: Router) {
    let lastIndex = taskService.getTasks().length -1;
    this.task.id = taskService.getTasks()[lastIndex].id + 1;
    this.functionalities = this.functionalityService.getFunctionalities();
   }

  createTask() {
    this.task.functionalityId = +this.task.functionalityId;
    this.taskService.createTask(this.task);
    this.router.navigate(['/project', this.task.projectId, 'task']);
  }

  goBack() {
    window.history.back();
  }
}
