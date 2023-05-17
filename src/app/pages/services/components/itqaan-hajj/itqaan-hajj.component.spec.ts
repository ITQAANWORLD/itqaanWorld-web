import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItqaanHajjComponent } from './itqaan-hajj.component';

describe('ItqaanHajjComponent', () => {
  let component: ItqaanHajjComponent;
  let fixture: ComponentFixture<ItqaanHajjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItqaanHajjComponent]
    });
    fixture = TestBed.createComponent(ItqaanHajjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
