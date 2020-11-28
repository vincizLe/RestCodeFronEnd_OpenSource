import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpDataService} from '../../services/http-data.service';
import {Restaurants} from '../../model/restaurants';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-restaurants-profile',
  templateUrl: './restaurants-profile.component.html',
  styleUrls: ['./restaurants-profile.component.css']
})
export class RestaurantsProfileComponent implements OnInit {
  restaurantData: Restaurants;
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  errorMessage: string;

  constructor(private httpDataService: HttpDataService) {
    this.restaurantData = {} as Restaurants;
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getRestaurantById(4);
  }
  getRestaurantById(id): void{
    this.httpDataService.getRestaurantById(id).subscribe((userFromtheAPI: Restaurants) => {
      this.restaurantData = userFromtheAPI;
    }, (err: any) => {
      console.error(err);
    });
  }
}
