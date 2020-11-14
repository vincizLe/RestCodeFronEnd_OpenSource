import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeOwnerComponent} from './pages/home-owner/home-owner.component';
import {AppointmentsComponent} from './pages/appointments/appointments.component';

const routes: Routes = [
  { path: 'home-owner', component: HomeOwnerComponent },
  { path: 'appointments', component: AppointmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

