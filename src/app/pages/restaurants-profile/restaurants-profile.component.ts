import { Component, OnInit } from '@angular/core';
import {HttpDataService} from '../../services/http-data.service';
import {Restaurants} from '../../model/restaurants';

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
  errorMessage: string;

  constructor(private httpDataService: HttpDataService) {
    this.restaurantData = {} as Restaurants;
  }

  ngOnInit(): void {
    this.getRestaurantById(1);
  }
  getRestaurantById(id): void{
    this.httpDataService.getItemRes(id).subscribe(
      restaurantData => {
        this.name = restaurantData.name;
        this.address = restaurantData.address;
        this.phoneNumber = restaurantData.phoneNumber;
      },
      error => this.errorMessage = error as any);
  }
}
