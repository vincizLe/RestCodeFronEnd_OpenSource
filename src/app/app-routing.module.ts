import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppointmentsComponent} from './pages/appointments/appointments.component';
import {SearchConsultantsComponent} from './pages/search-consultants/search-consultants.component';
import {ProductsComponent} from './pages/products/products.component';
import {ProfileConsultantComponent} from './pages/profile-consultant/profile-consultant.component';
import {RestaurantsProfileComponent} from './pages/restaurants-profile/restaurants-profile.component';
import {RestaurantsEditComponent} from './pages/restaurants-edit/restaurants-edit.component';
import {LoginComponent} from './pages/login/login.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {HomeConsultantComponent} from './pages/home-consultant/home-consultant.component';
import {HomeComponent} from './pages/home-owner/home.component';
import {SaleDetailsComponent} from './pages/sale-details/sale-details.component';
import {SalesComponent} from './pages/sales/sales.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'home-owner/:id', component: HomeComponent },
  { path: 'home-owner-consultant/:id', component: HomeConsultantComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'search-consultants', component: SearchConsultantsComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'profile/:id', component: ProfileConsultantComponent},
  { path: 'restaurants-profile/:id', component: RestaurantsProfileComponent },
  { path: 'restaurants-edit/:id', component: RestaurantsEditComponent },
  { path: 'sale-details', component: SaleDetailsComponent},
  { path: 'sales', component: SalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

