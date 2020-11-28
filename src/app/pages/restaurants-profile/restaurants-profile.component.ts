import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpDataService} from '../../services/http-data.service';
import {Restaurants} from '../../model/restaurants';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';

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
  constructor(private httpDataService: HttpDataService, private route: ActivatedRoute, private router: Router) {
    this.restaurantData = {} as Restaurants;
    this.route.params.subscribe(param => {
      this.id = param.id;
      console.log(param.id);
    });
  }

  ngOnInit(): void {
    this.getRestaurantById(this.id);
  }
  getRestaurantById(id): void{
    this.httpDataService.getRestaurantById(id).subscribe((userFromtheAPI: Restaurants) => {
      this.restaurantData = userFromtheAPI;
    }, (err: any) => {
      console.error(err);
    });
  }
  navigateToRestaurantEdit = (id) => {
    this.router.navigate([`/restaurants-edit/${id}`]);
  }
}
