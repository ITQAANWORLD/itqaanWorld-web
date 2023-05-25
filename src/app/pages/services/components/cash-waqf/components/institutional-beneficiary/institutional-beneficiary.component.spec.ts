import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalBeneficiaryComponent } from './institutional-beneficiary.component';

describe('InstitutionalBeneficiaryComponent', () => {
  let component: InstitutionalBeneficiaryComponent;
  let fixture: ComponentFixture<InstitutionalBeneficiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InstitutionalBeneficiaryComponent]
    });
    fixture = TestBed.createComponent(InstitutionalBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
