import {Component, OnInit, ViewChild} from '@angular/core';
import {Owner} from '../../model/owner';
import {HttpDataService} from '../../services/http-data.service';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {Consultant} from '../../model/consultant';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('registerOwnerForm', { static: false })
  registerOwnerForm: NgForm;
  ownerData: Owner;
  consultantData: Consultant;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'names', 'surnames', 'phone', 'email', 'password',  'ruc'];
  constructor(private httpDataService: HttpDataService, private route: ActivatedRoute, private router: Router) {
    this.ownerData = {} as Owner;
    this.consultantData = {} as Consultant;
  }
  isEditMode = false;

  ngOnInit(): void {
  }

  addOwner(): void {
    const newOwner = {
      names: this.ownerData.names,
      surnames: this.ownerData.surnames,
      phone: this.ownerData.phone,
      email: this.ownerData.email,
      password: this.ownerData.password,
      ruc: this.ownerData.ruc};
    this.httpDataService.createNewOwner(newOwner).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
      this.navigateToHomeOwner();
    });
  }
  addConsultant(): void {
    const newConsultant = {
      names: this.consultantData.names,
      surnames: this.consultantData.surnames,
      phone: this.consultantData.phone,
      email: this.consultantData.email,
      password: this.consultantData.password,
      linkedln: this.consultantData.linkedln};
    this.httpDataService.createNewConsultant(newConsultant).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
      this.navigateToHomeConsultant();
    });
  }

  navigateToHomeOwner = () => {
    this.router.navigate (['/home-owner']);
  }

  navigateToHomeConsultant = () => {
    this.router.navigate (['/home-consultant']);
  }
}
