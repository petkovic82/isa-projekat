import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicaldataComponent } from './patient-medicaldata.component';

describe('PatientMedicaldataComponent', () => {
  let component: PatientMedicaldataComponent;
  let fixture: ComponentFixture<PatientMedicaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientMedicaldataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientMedicaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
