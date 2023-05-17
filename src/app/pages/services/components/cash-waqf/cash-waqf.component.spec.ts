import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashWaqfComponent } from './cash-waqf.component';

describe('CashWaqfComponent', () => {
  let component: CashWaqfComponent;
  let fixture: ComponentFixture<CashWaqfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CashWaqfComponent]
    });
    fixture = TestBed.createComponent(CashWaqfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
