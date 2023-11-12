import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookAppoinment} from './book-appoinment.component';

describe('AppointmentFormComponent', () => {
  let component: BookAppoinment;
  let fixture: ComponentFixture<BookAppoinment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookAppoinment]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookAppoinment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
