import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';
import { State } from '../models/state.model';
import { Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Functionality } from '../models/functionality.model';
import { FunctionalityService } from '../functionality.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.scss']
})
export class TaskUpdateComponent {
  @Input() updatedTask: Task = new Task(0, '', '', '', 1, State.ToDo, 1);
  task: Task | null;
  states: string[] = Object.values(State);
  functionalities: Functionality[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private functionalityService: FunctionalityService
  ) {
    this.functionalities = this.functionalityService.getFunctionalities();
    const taskIdParam = this.route.snapshot.paramMap.get('taskId');
    this.task = this.taskService.getTask(taskIdParam ? +taskIdParam : 0);
    this.updatedTask = this.task || new Task(0, '', '', '', 1, State.ToDo, 1);
  }

  updateTask() {
    this.updatedTask.functionalityId = +this.updatedTask.functionalityId;
    this.taskService.updateTask(this.updatedTask);
    this.updateFunctionalityState();
    this.router.navigate(['/project', this.updatedTask.projectId, 'task']);
  }

  private updateFunctionalityState() {
    const tasks = this.functionalityService.getTasksForFunctionality(this.updatedTask.functionalityId);
    const taskStates = tasks.map(task => task.state);

    if (taskStates.includes(State.InProgress)) {
      const functionality = this.functionalityService.getFunctionality(this.updatedTask.functionalityId);
      if (functionality) {
        functionality.state = State.InProgress;
        this.functionalityService.updateFunctionality(functionality);
      }
    } else if (taskStates.every(state => state === State.Done)) {
      const functionality = this.functionalityService.getFunctionality(this.updatedTask.functionalityId);
      if (functionality) {
        functionality.state = State.Done;
        this.functionalityService.updateFunctionality(functionality);
      }
    }
  }

  goBack() {
    window.history.back();
  }
}
