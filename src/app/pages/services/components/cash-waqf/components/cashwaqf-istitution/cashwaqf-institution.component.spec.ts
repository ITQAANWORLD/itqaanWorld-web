import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CashwaqfInstitutionComponent } from './cashwaqf-institution.component';


describe('CashwaqfInstitutionComponent', () => {
  let component: CashwaqfInstitutionComponent;
  let fixture: ComponentFixture<CashwaqfInstitutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CashwaqfInstitutionComponent]
    });
    fixture = TestBed.createComponent(CashwaqfInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
