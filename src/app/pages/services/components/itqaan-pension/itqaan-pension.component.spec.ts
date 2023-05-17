import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItqaanPensionComponent } from './itqaan-pension.component';

describe('ItqaanPensionComponent', () => {
  let component: ItqaanPensionComponent;
  let fixture: ComponentFixture<ItqaanPensionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItqaanPensionComponent]
    });
    fixture = TestBed.createComponent(ItqaanPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
