import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { NgForm } from '@angular/forms';
import { Sale } from '../../models/sale';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpDataService } from '../../services/http-data.service';
import * as _ from 'lodash';
import {Router} from '@angular/router';
export interface Product {
  id: number;
  name: string;
  category: string;
  precio: number;
}

const ELEMENT_DATA: Product[] = [
  {id: 1, name: 'Arroz con Pollo', category: 'Platos de Fondo', precio: 25 },
  {id: 2, name: 'Cebiche', category: 'Marinos', precio: 20 },
  {id: 3, name: 'Causa Rellena', category: 'Entradas', precio: 10 },
  {id: 4, name: 'Lomo Saltado', category: 'Platos de Fondo', precio: 25 }
];

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit, AfterViewInit, MatInputModule, MatCheckboxModule {
  displayedColumns: string[] = ['select', 'id', 'name', 'category', 'precio'];
  dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);
  selection = new SelectionModel<Product>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  moveToSelectedTab(tabName: string) {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
      if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) {
        (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
      }
    }
  }


}
