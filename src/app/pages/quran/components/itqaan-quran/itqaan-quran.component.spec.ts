import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItqaanQuranComponent } from './itqaan-quran.component';

describe('ItqaanQuranComponent', () => {
  let component: ItqaanQuranComponent;
  let fixture: ComponentFixture<ItqaanQuranComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItqaanQuranComponent]
    });
    fixture = TestBed.createComponent(ItqaanQuranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
