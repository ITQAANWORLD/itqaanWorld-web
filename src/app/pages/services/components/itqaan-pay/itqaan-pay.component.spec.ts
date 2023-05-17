import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItqaanPayComponent } from './itqaan-pay.component';

describe('ItqaanPayComponent', () => {
  let component: ItqaanPayComponent;
  let fixture: ComponentFixture<ItqaanPayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItqaanPayComponent]
    });
    fixture = TestBed.createComponent(ItqaanPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
