import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { CreateRoomComponent } from "./room/create-room/create-room.component";
import { RoomDetailComponent } from "./room/room-detail/room-detail.component";
import { RoomsComponent } from "./room/rooms/rooms.component";
import { UpdateRoomComponent } from "./room/update-room/update-room.component";
import { PatientGraphComponent } from './patient/patient-graph/patient-graph.component';
import { PatientMedicaldataComponent } from './patient/patient-medicaldata/patient-medicaldata.component';
import { NewBlogComponent } from './blog/new-blog/new-blog.component';
import { PatientListComponent } from './patient/admin-patient/patient-list/patient-list.component';
import { AppointmentFormComponent } from './appointment/appointment-form/appointment-form.component';
import {NavbarModule} from "./navbar/navbar.module";
import { AppointmentsPatientComponent } from './appointment/appointments-patient/appointments-patient.component';
import { AllPatientDataComponent } from './patient/all-patient-data/all-patient-data.component';


const routes: Routes = [
  { path: 'patient/:id/medical-data', component: UpdateRoomComponent },
  { path: 'blog', component: NewBlogComponent },
  { path: 'graph/:id', component: PatientGraphComponent },
  { path: 'appointment-create', component: AppointmentFormComponent },
  { path: 'appointments/patient/:id', component: AppointmentsPatientComponent },
  { path: 'patients', component: PatientListComponent },
]

@NgModule({
  declarations: [
    RoomsComponent,
    RoomDetailComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    PatientGraphComponent,
    PatientMedicaldataComponent,
    NewBlogComponent,
    PatientListComponent,
    AppointmentFormComponent,
    AppointmentsPatientComponent,
    AllPatientDataComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,

        RouterModule.forChild(routes),
        NavbarModule
    ],
  exports: [ RouterModule ]
})
export class HospitalModule { }
