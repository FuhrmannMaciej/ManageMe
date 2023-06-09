import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './models/task.model';

@Pipe({
  name: 'filterByState',
})
export class FilterByStatePipe implements PipeTransform {
  transform(tasks: Task[], state: string): Task[] {
    if (!tasks || !state) {
      return tasks;
    }

    return tasks.filter((task) => task.state === state);
  }
}
