import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtFaalComponent } from './at-faal.component';

describe('AtFaalComponent', () => {
  let component: AtFaalComponent;
  let fixture: ComponentFixture<AtFaalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AtFaalComponent]
    });
    fixture = TestBed.createComponent(AtFaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
