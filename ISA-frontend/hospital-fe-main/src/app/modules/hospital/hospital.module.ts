import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "src/app/material/material.module";
import {AppointmentFormComponent} from './appointment/appointment-form/appointment-form.component';
import {NavbarModule} from "./navbar/navbar.module";
import {AppointmentsPatientComponent} from './appointment/appointments-patient/appointments-patient.component';
import { FooterComponent } from './footer/footer.component';
import { DialogComponent } from './dialog/dialog.component';


const routes: Routes = [
  {path: 'appointment-create', component: AppointmentFormComponent},
  {path: 'appointments/patient/:id', component: AppointmentsPatientComponent},
]

@NgModule({
  declarations: [
    AppointmentFormComponent,
    AppointmentsPatientComponent,
    FooterComponent,
    DialogComponent,
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
