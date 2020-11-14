import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AppointmentsComponent} from './pages/appointments/appointments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'appointments', component: AppointmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

