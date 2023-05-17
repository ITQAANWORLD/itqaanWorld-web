import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItqaanTransportationComponent } from './itqaan-transportation.component';

describe('ItqaanTransportationComponent', () => {
  let component: ItqaanTransportationComponent;
  let fixture: ComponentFixture<ItqaanTransportationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItqaanTransportationComponent]
    });
    fixture = TestBed.createComponent(ItqaanTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
