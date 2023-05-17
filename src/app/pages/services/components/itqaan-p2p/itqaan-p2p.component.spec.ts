import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItqaanP2pComponent } from './itqaan-p2p.component';

describe('ItqaanP2pComponent', () => {
  let component: ItqaanP2pComponent;
  let fixture: ComponentFixture<ItqaanP2pComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItqaanP2pComponent]
    });
    fixture = TestBed.createComponent(ItqaanP2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
