import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityUpdateComponent } from './functionality-update.component';

describe('FunctionalityUpdateComponent', () => {
  let component: FunctionalityUpdateComponent;
  let fixture: ComponentFixture<FunctionalityUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalityUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
