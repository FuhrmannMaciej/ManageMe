import { Component } from '@angular/core';
import { Functionality } from '../models/functionality.model';
import { FunctionalityService } from '../functionality.service';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '../models/state.model';

@Component({
  selector: 'app-functionality-create',
  templateUrl: './functionality-create.component.html',
  styleUrls: ['./functionality-create.component.scss']
})
export class FunctionalityCreateComponent {
  @Input() functionality: Functionality = new Functionality(0, '', '', '', State.ToDo, 1);
  states: string[] = Object.values(State);

  constructor(private functionalityService: FunctionalityService,     private router: Router,) {
    let lastIndex = functionalityService.getFunctionalities().length -1;
    this.functionality.id = functionalityService.getFunctionalities()[lastIndex].id + 1;
   }

  createFunctionality() {
    this.functionalityService.createFunctionality(this.functionality);
    this.router.navigate(['/project', this.functionality.projectId, 'functionality']);
  }

  goBack() {
    window.history.back();
  }
}
