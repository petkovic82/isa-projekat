import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/pages/home/home.component";
import {LogInComponent} from "./modules/pages/log-in/log-in.component";
import {RegisterComponent} from "./modules/pages/register/register.component";
import {LandingPageComponent} from "./modules/pages/landing-page/landing-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landing', component: LandingPageComponent}
  // {path: 'landing', component: ProfileComponent/*, canActivate:[AuthGuardGuard]*/},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
