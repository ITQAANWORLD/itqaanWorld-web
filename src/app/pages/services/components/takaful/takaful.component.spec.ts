import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakafulComponent } from './takaful.component';

describe('TakafulComponent', () => {
  let component: TakafulComponent;
  let fixture: ComponentFixture<TakafulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TakafulComponent]
    });
    fixture = TestBed.createComponent(TakafulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
