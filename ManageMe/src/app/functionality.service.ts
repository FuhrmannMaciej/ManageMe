import { Injectable } from '@angular/core';
import { Functionality } from './models/functionality.model';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {
  private functionalities: Functionality[] = [
    new Functionality(1, 'Functionality 1', 'Description 1', 'High', 'Owner 1', 'In Progress', 1),
    new Functionality(2, 'Functionality 2', 'Description 2', 'Medium', 'Owner 2', 'Completed', 1)
  ];

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
}
