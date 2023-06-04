import { Component } from '@angular/core';
import { Functionality } from '../models/functionality.model';
import { Router } from '@angular/router';
import { FunctionalityService } from '../functionality.service';

@Component({
  selector: 'app-functionality',
  templateUrl: './functionality.component.html',
  styleUrls: ['./functionality.component.scss']
})
export class FunctionalityComponent {
  functionalities: Functionality[];

  constructor(
    private router: Router,
    private functionalityService: FunctionalityService
    ) {
      this.functionalities = this.functionalityService.getFunctionalities();
  }

  createFunctionality() {
    const newFunctionality = new Functionality(3, 'New Functionality', 'New Description', 'Low', 'New Owner', 'To Do', 1);
    this.functionalityService.createFunctionality(newFunctionality);
  }

  updateFunctionality(functionality: Functionality) {
    functionality.name = 'Updated Functionality';
    functionality.description = 'Updated Description';
    functionality.priority = 'Medium';
    this.functionalityService.updateFunctionality(functionality);
  }

  deleteFunctionality(functionality: Functionality) {
    this.functionalityService.deleteFunctionality(functionality.id);
  }

  showFunctionalityDetails(functionality: Functionality) {
    this.router.navigate(['/project', functionality.projectId, 'functionality', functionality.id]);
    console.log('Name:', functionality.name);
    console.log('Description:', functionality.description);
    console.log('Priority:', functionality.priority);
    console.log('Owner:', functionality.owner);
    }
  }
