import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItqaanBnbComponent } from './itqaan-bnb.component';

describe('ItqaanBnbComponent', () => {
  let component: ItqaanBnbComponent;
  let fixture: ComponentFixture<ItqaanBnbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItqaanBnbComponent]
    });
    fixture = TestBed.createComponent(ItqaanBnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
