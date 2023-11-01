import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPatientDataComponent } from './all-patient-data.component';

describe('AllPatientDataComponent', () => {
  let component: AllPatientDataComponent;
  let fixture: ComponentFixture<AllPatientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPatientDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPatientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
