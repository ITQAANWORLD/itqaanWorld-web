import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItqaanZakaatComponent } from './itqaan-zakaat.component';

describe('ItqaanZakaatComponent', () => {
  let component: ItqaanZakaatComponent;
  let fixture: ComponentFixture<ItqaanZakaatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItqaanZakaatComponent]
    });
    fixture = TestBed.createComponent(ItqaanZakaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
