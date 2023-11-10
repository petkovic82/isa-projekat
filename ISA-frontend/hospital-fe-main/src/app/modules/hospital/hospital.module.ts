import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "src/app/material/material.module";
import {BookAppoinment} from './appointment/appointment-form/book-appoinment.component';
import {NavbarModule} from "./navbar/navbar.module";
import {AppointmentsPatientComponent} from './appointment/appointments-patient/appointments-patient.component';
import { FooterComponent } from './footer/footer.component';
import { DialogComponent } from './dialog/dialog.component';
import { CompaniesEmployeeComponent } from './companies-employee/companies-employee.component';
import { CompanyEquipmentComponent } from './company-equipment/company-equipment.component';
import { CreateAppointmentComponent } from './appointment/create-appointment/create-appointment.component';


const routes: Routes = [
  {path: 'appointment-create', component: BookAppoinment},
  {path: 'appointments/patient/:id', component: AppointmentsPatientComponent},
]

@NgModule({
  declarations: [
    BookAppoinment,
    AppointmentsPatientComponent,
    FooterComponent,
    DialogComponent,
    CompaniesEmployeeComponent,
    CompanyEquipmentComponent,
    CreateAppointmentComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NavbarModule
  ],
  exports: [RouterModule, FooterComponent]
})
export class HospitalModule {
}
