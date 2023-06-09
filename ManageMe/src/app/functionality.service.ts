import { Injectable } from '@angular/core';
import { Functionality } from './models/functionality.model';
import { State } from './models/state.model';
import { Task } from './models/task.model';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {
  private functionalities: Functionality[] = [
    new Functionality(1, 'Functionality 1', 'Description 1', 'High', State.ToDo, 1),
    new Functionality(2, 'Functionality 2', 'Description 2', 'Medium', State.ToDo, 1)
  ];
  private tasks: Task[];

  constructor(
    private taskService: TaskService
    ) {
      this.tasks = this.taskService.getTasks();
  }

  getFunctionalities(): Functionality[] {
    return this.functionalities;
  }

  getFunctionality(functionalityId: number): Functionality | null {
    const index = this.functionalities.findIndex(func => func.id === functionalityId);
    return index > -1 ? this.functionalities[index] : null;
  }

  createFunctionality(newFunctionality: Functionality) {
    this.functionalities.push(newFunctionality);
  }

  updateFunctionality(updatedFunctionality: Functionality) {
    const index = this.functionalities.findIndex(func => func.id === updatedFunctionality.id);
    if (index > -1) {
      this.functionalities[index] = updatedFunctionality;
    }
  }

  deleteFunctionality(functionalityId: number) {
    const index = this.functionalities.findIndex(func => func.id === functionalityId);
    if (index > -1) {
      this.functionalities.splice(index, 1);
    }
  }

  getTasksForFunctionality(functionalityId: number): Task[] {
    return this.tasks.filter(task => task.functionalityId === functionalityId);
  }
}
