import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedInstitutionComponent } from './selected-institution.component';

describe('SelectedInstitutionComponent', () => {
  let component: SelectedInstitutionComponent;
  let fixture: ComponentFixture<SelectedInstitutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SelectedInstitutionComponent]
    });
    fixture = TestBed.createComponent(SelectedInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
