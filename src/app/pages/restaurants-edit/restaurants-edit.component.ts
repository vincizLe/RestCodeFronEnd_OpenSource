import {Component, OnInit, ViewChild} from '@angular/core';
import {Restaurants} from '../../model/restaurants';
import {NgForm} from '@angular/forms';
import {HttpDataService} from '../../services/http-data.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-restaurants-edit',
  templateUrl: './restaurants-edit.component.html',
  styleUrls: ['./restaurants-edit.component.css']
})
export class RestaurantsEditComponent implements OnInit {
  @ViewChild('restaurantForm', {static: false})
  restaurantForm: NgForm;
  restaurantData: Restaurants;
  dataSource = new MatTableDataSource();
  @ViewChild(MatTableDataSource) sort: MatSort;
  isEditMode = false;

  constructor(private httpDataServive: HttpDataService, private route: ActivatedRoute, private router: Router) {
    this.restaurantData = {} as Restaurants;
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.updateRestaurant();
  }

  cancelEdit(): void{
    this.isEditMode = false;
    this.restaurantForm.resetForm();
  }
  updateRestaurant(): void{
    this.restaurantData.id = 4;
    this.httpDataServive.updateRestaurantById(this.restaurantData.id, this.restaurantData)
      .subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data.map((o: Restaurants) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
        this.cancelEdit();
      });
  }

  onSubmit(): void{
    if (this.restaurantForm.form.valid) {
        this.updateRestaurant();
    } else {
      console.log('Invalid Data');
    }
  }
  navigateToRestaurantProfile = () => {
    this.router.navigate(['/restaurants-profile']);
  }
}
