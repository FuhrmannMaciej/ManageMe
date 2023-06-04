import { Component } from '@angular/core';
import { Functionality } from '../models/functionality.model';
import { FunctionalityService } from '../functionality.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-functionality-details',
  templateUrl: './functionality-details.component.html',
  styleUrls: ['./functionality-details.component.scss']
})
export class FunctionalityDetailsComponent {
  functionality: Functionality | null;

  constructor(
    private route: ActivatedRoute,
    private functionalityService: FunctionalityService
    ) {
      const functionalityIdParam = this.route.snapshot.paramMap.get('functionalityId');
      this.functionality = this.functionalityService.getFunctionality(functionalityIdParam ? +functionalityIdParam : 0);
  }
}
