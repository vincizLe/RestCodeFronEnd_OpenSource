import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AppointmentsComponent} from './pages/appointments/appointments.component';
import {SearchConsultantsComponent} from './pages/search-consultants/search-consultants.component';
import {ProductsComponent} from './pages/products/products.component';
import {ProfileConsultantComponent} from './pages/profile-consultant/profile-consultant.component';
import {RestaurantsProfileComponent} from './pages/restaurants-profile/restaurants-profile.component';
import {RestaurantsEditComponent} from './pages/restaurants-edit/restaurants-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'search-consultants', component: SearchConsultantsComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'profile/:id', component: ProfileConsultantComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'restaurants-profile', component: RestaurantsProfileComponent },
  { path: 'restaurants-edit', component: RestaurantsEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

