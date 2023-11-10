import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/pages/home/home.component";
import {LogInComponent} from "./modules/pages/log-in/log-in.component";
import {RegisterComponent} from "./modules/pages/register/register.component";
import {LandingPageComponent} from "./modules/pages/landing-page/landing-page.component";
import {CompaniesEmployeeComponent} from "./modules/hospital/companies-employee/companies-employee.component";
import {CompanyEquipmentComponent} from "./modules/hospital/company-equipment/company-equipment.component";
import {BookAppoinment} from "./modules/hospital/appointment/appointment-form/book-appoinment.component";
import {
  CreateAppointmentComponent
} from "./modules/hospital/appointment/create-appointment/create-appointment.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landing', component: LandingPageComponent},
  {path:'companies/employee/:id', component: CompaniesEmployeeComponent},
  {path: 'company-equipment/:id', component: CompanyEquipmentComponent},
  {path: 'equipment-appointment/:id', component: BookAppoinment},
  {path: 'create-appointment', component: CreateAppointmentComponent}
  // {path: 'landing', component: ProfileComponent/*, canActivate:[AuthGuardGuard]*/},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
