import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailASandaInstitutionComponent } from './dail-a-sanda-institution.component';

describe('DailASandaInstitutionComponent', () => {
  let component: DailASandaInstitutionComponent;
  let fixture: ComponentFixture<DailASandaInstitutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DailASandaInstitutionComponent]
    });
    fixture = TestBed.createComponent(DailASandaInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
