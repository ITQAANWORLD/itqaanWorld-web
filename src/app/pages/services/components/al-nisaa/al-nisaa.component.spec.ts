import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlNisaaComponent } from './al-nisaa.component';

describe('AlNisaaComponent', () => {
  let component: AlNisaaComponent;
  let fixture: ComponentFixture<AlNisaaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlNisaaComponent]
    });
    fixture = TestBed.createComponent(AlNisaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
