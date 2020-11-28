import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {HomeComponent} from './pages/home-owner/home.component';
import {AppointmentsComponent} from './pages/appointments/appointments.component';
import {SearchConsultantsComponent} from './pages/search-consultants/search-consultants.component';
import {ProductsComponent} from './pages/products/products.component';
import {HomeConsultantComponent} from './pages/home-consultant/home-consultant.component';

const routes: Routes = [
  { path: 'home-owner', component: HomeComponent },
  { path: 'home-consultant', component: HomeConsultantComponent },
  { path: '', component: LoginComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'search-consultants', component: SearchConsultantsComponent },
  { path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

