import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalDonationComponent } from './institutional-donation.component';

describe('InstitutionalDonationComponent', () => {
  let component: InstitutionalDonationComponent;
  let fixture: ComponentFixture<InstitutionalDonationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InstitutionalDonationComponent]
    });
    fixture = TestBed.createComponent(InstitutionalDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
