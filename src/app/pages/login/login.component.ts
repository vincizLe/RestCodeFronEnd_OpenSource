import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpDataService} from '../../services/http-data.service';
import {LoginOwner} from '../../model/login-owner';
import {LoginConsultant} from '../../model/login-consultant';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isValidEmail = /\S+@\S+\.\S+/;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });
  public ownerForm: FormGroup;
  listOwners: LoginOwner[];
  listConsultants: LoginConsultant[];
  constructor(public httpDataService: HttpDataService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
  }
  ngOnInit(): void {
  }
  login(user: string) {
    this.httpDataService.getListOwners_Login().subscribe((userFromAPI: LoginOwner[]) => {
      this.listOwners = userFromAPI;
      for (const result of this.listOwners){
        if (result.email === user){
          this.navigateToHomeOwner(result.id);
        }
        else{
          this.httpDataService.getListConsultants_Login().subscribe((userFromAPI2: LoginConsultant[]) => {
            this.listConsultants = userFromAPI2;
            for (const result2 of this.listConsultants){
              if (result2.email === user){
                this.navigateToHomeConsultant(result2.id);
              }
              else{

              }
            }
          }, error => console.error(error));
        }
      }
    }, error => console.error(error));
  }
  navigateToHomeOwner = (id) => {
    this.router.navigate ([`/home-owner/${id}`]);
  }
  navigateToHomeConsultant = (id) => {
    this.router.navigate ([`/home-owner-consultant/${id}`]);
  }
  navigateToSignIn = () => {
    this.router.navigate (['/sign-in']);
  }
  getErrorMessage (field: string){
    let message;
    if ( this.loginForm.get(field).errors.required){
      message = 'You must enter a value';
    } else if (this.loginForm.get(field).hasError('pattern')){
      message = 'Not a valid email';
    }else if (this.loginForm.get(field).hasError('minlenght')){
      const minLenght = this.loginForm.get(field).errors?.minLenght.requiredLength;
      message = `This field must be longer than ${minLenght} characters`;
    }
    return message;
  }
  isValidField(field: string): boolean {
    return  ((this.loginForm.get(field).touched || this.loginForm.get(field).dirty) && !this.loginForm.get(field).valid);
  }
}
