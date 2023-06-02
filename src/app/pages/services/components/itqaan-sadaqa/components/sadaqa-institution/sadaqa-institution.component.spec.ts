import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadaqaInstitutionComponent } from './sadaqa-institution.component';

describe('SadaqaInstitutionComponent', () => {
  let component: SadaqaInstitutionComponent;
  let fixture: ComponentFixture<SadaqaInstitutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SadaqaInstitutionComponent]
    });
    fixture = TestBed.createComponent(SadaqaInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
