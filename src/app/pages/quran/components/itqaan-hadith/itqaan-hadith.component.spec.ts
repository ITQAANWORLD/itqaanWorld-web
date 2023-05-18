import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItqaanHadithComponent } from './itqaan-hadith.component';

describe('ItqaanHadithComponent', () => {
  let component: ItqaanHadithComponent;
  let fixture: ComponentFixture<ItqaanHadithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItqaanHadithComponent]
    });
    fixture = TestBed.createComponent(ItqaanHadithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
