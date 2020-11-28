import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-search-consultants',
  templateUrl: './search-consultants.component.html',
  styleUrls: ['./search-consultants.component.css']
})
export class SearchConsultantsComponent implements OnInit {

  p = 1;
  filtroValor = '';
  source: [];
  sourcesRestaurants: Array<any>;
  constructor(private http: HttpClient) { }
  handleSearch(value: string): void {
    this.filtroValor = value;
  }
  ngOnInit(): void {
    this.http.get('https://restcodewebapplication.azurewebsites.net/api/consultants')
      .subscribe((data: [any]) => {this.sourcesRestaurants = data; });
  }
}
