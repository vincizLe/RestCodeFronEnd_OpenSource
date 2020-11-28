import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HomeComponent } from './pages/home/home.component';
import { SearchConsultantsComponent } from './pages/search-consultants/search-consultants.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileConsultantComponent } from './pages/profile-consultant/profile-consultant.component';
import {MatListModule} from '@angular/material/list';
import { RestaurantsProfileComponent } from './pages/restaurants-profile/restaurants-profile.component';
import { RestaurantsEditComponent } from './pages/restaurants-edit/restaurants-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    HomeComponent,
    SearchConsultantsComponent,
    SearchComponent,
    SearchPipe,
    ProductsComponent,
    ProfileConsultantComponent,
    RestaurantsProfileComponent,
    RestaurantsEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
