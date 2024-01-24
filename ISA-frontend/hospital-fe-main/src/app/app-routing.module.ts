import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/pages/home/home.component";
import {LogInComponent} from "./modules/pages/log-in/log-in.component";
import {RegisterComponent} from "./modules/pages/register/register.component";
import {LandingPageComponent} from "./modules/pages/landing-page/landing-page.component";
import {CompaniesEmployeeComponent} from "./modules/hospital/companies-employee/companies-employee.component";
import {CompanyEquipmentComponent} from "./modules/hospital/company-equipment/company-equipment.component";
import {BookAppoinment} from "./modules/hospital/appointment/book-appointment/book-appoinment.component";
import {CreateAppointmentComponent} from "./modules/hospital/appointment/create-appointment/create-appointment.component";
import {AppointmentsEmployeeComponent} from "./modules/hospital/appointment/appointments-employee/appointments-employee.component";
import {HasRoleEmployeeGuard} from "./modules/services/auth/guards/has-role-employee.guard";
import {HasRoleCompanyAdminGuard} from "./modules/services/auth/guards/has-role-company-admin.guard";
import {LoggedInGuard} from "./modules/services/auth/guards/logged-in.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landing', component: LandingPageComponent, canActivate: [LoggedInGuard]},
  {path: 'companies/employee/:id', component: CompaniesEmployeeComponent, canActivate: [HasRoleEmployeeGuard]},
  {path: 'company-equipment/:id', component: CompanyEquipmentComponent, canActivate: [HasRoleEmployeeGuard]},
  {path: 'equipment-appointment/:id', component: BookAppoinment, canActivate: [HasRoleEmployeeGuard]},
  {path: 'create-appointment', component: CreateAppointmentComponent, canActivate: [HasRoleCompanyAdminGuard]},
  {path: 'all-appointments', component: AppointmentsEmployeeComponent, canActivate: [HasRoleEmployeeGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
