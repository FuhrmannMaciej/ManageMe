import { Component, Input } from '@angular/core';
import { FunctionalityService } from '../functionality.service';
import { Functionality } from '../models/functionality.model';
import { ActivatedRoute } from '@angular/router';
import { State } from '../models/state.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-functionality-update',
  templateUrl: './functionality-update.component.html',
  styleUrls: ['./functionality-update.component.scss']
})
export class FunctionalityUpdateComponent {
  @Input() updatedFunctionality: Functionality = new Functionality(0, '', '', '', State.ToDo, 0);
  functionality: Functionality | null;
  states: string[] = Object.values(State);

  constructor(    private route: ActivatedRoute,
    private router: Router,
    private functionalityService: FunctionalityService) { 
    const functionalityIdParam = this.route.snapshot.paramMap.get('functionalityId');
      this.functionality = this.functionalityService.getFunctionality(functionalityIdParam ? +functionalityIdParam : 0);
      this.updatedFunctionality.id = this.functionality?.id || 0;
    this.updatedFunctionality.projectId = this.functionality?.projectId || 0;
    if (this.updatedFunctionality.name === '') {
      this.updatedFunctionality.name = this.functionality?.name || '';
    }
    if (this.updatedFunctionality.description === '') {
      this.updatedFunctionality.description = this.functionality?.description || '';
    }
    if (this.updatedFunctionality.priority === '') {
      this.updatedFunctionality.priority = this.functionality?.priority || '';
    }
    if (this.updatedFunctionality.state !== State.ToDo) {
      this.updatedFunctionality.state = this.functionality?.state || State.ToDo;
    }
  }

  updateFunctionality() {
    this.functionalityService.updateFunctionality(this.updatedFunctionality);
    this.router.navigate(['/project', this.updatedFunctionality.projectId, 'functionality']);
  }

  goBack() {
    window.history.back();
  }
}
