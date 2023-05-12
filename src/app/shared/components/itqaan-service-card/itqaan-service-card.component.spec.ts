import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItqaanServiceCardComponent } from './itqaan-service-card.component';

describe('ItqaanServiceCardComponent', () => {
  let component: ItqaanServiceCardComponent;
  let fixture: ComponentFixture<ItqaanServiceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItqaanServiceCardComponent]
    });
    fixture = TestBed.createComponent(ItqaanServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
