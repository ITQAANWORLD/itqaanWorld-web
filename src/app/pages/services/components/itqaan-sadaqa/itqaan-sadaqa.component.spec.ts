import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItqaanSadaqaComponent } from './itqaan-sadaqa.component';

describe('ItqaanSadaqaComponent', () => {
  let component: ItqaanSadaqaComponent;
  let fixture: ComponentFixture<ItqaanSadaqaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItqaanSadaqaComponent]
    });
    fixture = TestBed.createComponent(ItqaanSadaqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
