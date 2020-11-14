import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../sales/sales.component';
export interface Transaction {
  id: number;
  client: string;
  product: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent {
  displayedColumns: string[] = ['id', 'client', 'product', 'category', 'price'];
  transactions: Transaction[] = [
    {id: 1, client: 'Marco Rivera', product: 'Arroz con Pollo', category: 'Platos de Fondo', price: 25},
    {id: 2, client: 'Maria Fernanda Abadie', product: 'Ceviche', category: 'Marino', price: 20}
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }
}
