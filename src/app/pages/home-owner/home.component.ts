import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id = 0;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(param => {
      this.id = param.id;
      console.log(param.id);
    });
  }

  ngOnInit(): void {
  }
  navigateToAppointments = () => {
    this.router.navigate (['/appointments']);
  }
  navigateToRestaurant = () => {
    this.router.navigate ([`/restaurants-profile/${this.id}`]);
  }
  navigateToProducts = () => {
    this.router.navigate (['/products']);
  }
  navigateToConsultants = () => {
    this.router.navigate (['/search-consultants']);
  }
  navigateToSales = () => {
    this.router.navigate (['/sales']);
  }
  navigateToReports = () => {
    this.router.navigate (['/sale-details']);
  }

}
