import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../../model/product';
import {HttpDataService} from '../../services/http-data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  @ViewChild('productForm', {static: false})
  productForm: NgForm;
  productData: Product;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'price', 'categoryId', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isEditMode = false;

  constructor(private httpDataService: HttpDataService) {
    this.productData = {} as Product;
  }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getAllProducts();
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
  getAllProducts(): void{
    this.httpDataService.getListP().subscribe((response: any) => {
      if (!response){
        return;
      }
      this.dataSource = new MatTableDataSource(response.content);
    });
  }
  editItem(element): void {
    console.log(element);
    this.productData = _.cloneDeep(element);
    this.isEditMode = true;
  }
  cancelEdit(): void {
    this.isEditMode = false;
    this.productForm.resetForm();
  }
  deleteItem(id): void {
    this.httpDataService.deleteItemP(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Product) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }
  addProduct(): void {
    const newProduct = {name: this.productData.name, price: this.productData.price, categoryId: this.productData.categoryId};
    this.httpDataService.createItemP(newProduct).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }
  updateProduct(): void {
    this.httpDataService.updateItemP(this.productData.id, this.productData)
      .subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data.map((o: Product) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
        this.cancelEdit();
      });
  }
  onSubmit(): void {
    if (this.productForm.form.valid) {
      if (this.isEditMode) {
        this.updateProduct();
      } else {
        this.addProduct();
      }
    } else {
      console.log('Invalid Data');
    }
  }
}
