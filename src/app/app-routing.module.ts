import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SalesComponent} from './pages/sales/sales.component';
import {SalesReportComponent} from './pages/sales-report/sales-report.component';

const routes: Routes = [
  { path: 'sales', component: SalesComponent },
  { path: 'sales-report', component: SalesReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
