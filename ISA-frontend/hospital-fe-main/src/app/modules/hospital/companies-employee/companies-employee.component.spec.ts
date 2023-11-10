import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesEmployeeComponent } from './companies-employee.component';

describe('CompaniesEmployeeComponent', () => {
  let component: CompaniesEmployeeComponent;
  let fixture: ComponentFixture<CompaniesEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniesEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
