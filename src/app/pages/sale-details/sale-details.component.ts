import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {SaleDetail} from '../../model/sale-detail';
import {HttpDataService} from '../../services/http-data.service';
import * as _ from 'lodash';
export interface Transaction {
  id: number;
  client: string;
  product: string;
  category: string;
  price: number;
}
@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.css']
})

export class SaleDetailsComponent implements OnInit, AfterViewInit {

  @ViewChild('saleDetailForm', {static: false})
  saleDetailForm: NgForm;
  saleDetailData: SaleDetail;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'client', 'product', 'category', 'price'];
  transactions: Transaction[] = [
    {id: 1, client: 'Marco Rivera', product: 'Pachamanca', category: '', price: 35},
    {id: 2, client: 'Maria Fernanda Abadie', product: 'Ceviche', category: '', price: 10},
    {id: 3, client: 'Renato Bazar', product: 'Pachamanca', category: '', price: 35},
    {id: 4, client: 'Romina Vega', product: 'causa', category: '', price: 20},
    {id: 5, client: 'Estefany Siu', product: 'Ceviche', category: '', price: 10}];

   /** Gets the total cost of all transactions. */
   getTotalCost() {
     return this.transactions.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  constructor(private httpDataService: HttpDataService) {
    this.saleDetailData = {} as SaleDetail;
  }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getAllSaleDetails();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  getAllSaleDetails(): void{
    this.httpDataService.getListS().subscribe((response: any) => {
      if (!response){
        return;
      }
      this.dataSource = new MatTableDataSource(response.content);
    });
  }
}

