import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpDataService} from '../../services/http-data.service';
import {LoginOwner} from '../../model/login-owner';
import {LoginConsultant} from '../../model/login-consultant';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public ownerForm: FormGroup;
  listOwners: LoginOwner[];
  listConsultants: LoginConsultant[];
  constructor(public httpDataService: HttpDataService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
  }
  login(userId: string) {
    this.httpDataService.getListOwners_Login().subscribe((userFromAPI: LoginOwner[]) => {
      this.listOwners = userFromAPI;
      for (const result of this.listOwners){
        if (result.email === userId){
          this.navigateToHomeOwner();
        }
        else{
          this.httpDataService.getListConsultants_Login().subscribe((userFromAPI2: LoginConsultant[]) => {
            this.listConsultants = userFromAPI2;
            for (const result2 of this.listConsultants){
              if (result2.email === userId){
                this.navigateToHomeConsultant();
              }
              else{

              }
            }
          }, error => console.error(error));
        }
      }
    }, error => console.error(error));
  }
  navigateToHomeOwner = () => {
    this.router.navigate (['/home-owner']);
  }
  navigateToHomeConsultant = () => {
    this.router.navigate (['/home-owner-consultant']);
  }
  navigateToSignIn = () => {
    this.router.navigate (['/sign-in']);
  }

}
