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
    this.router.navigate(['/project', 1, 'functionality', 'create']);
  }

  updateFunctionality(functionality: Functionality) {
    this.router.navigate(['/project', functionality.projectId, 'functionality', functionality.id, 'update']);
  }

  deleteFunctionality(functionality: Functionality) {
    this.functionalityService.deleteFunctionality(functionality.id);
  }

  showFunctionalityDetails(functionality: Functionality) {
    this.router.navigate(['/project', functionality.projectId, 'functionality', functionality.id]);
    }

    goBack() {
      this.router.navigate(['/project']);
    }
  }
