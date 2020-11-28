import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Appointment} from '../../model/appointment';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpDataService } from 'src/app/services/http-data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit, AfterViewInit {

  @ViewChild('appointmentForm', { static: false })
  appointmentForm: NgForm;
  appointmentData: Appointment;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'Current Datetime', 'Scheduled Datetime', 'Topic', 'Meeting Link'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isEditMode = false;

  constructor(private httpDataService: HttpDataService) {
    this.appointmentData = {} as Appointment;
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getAllAppointments();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllAppointments(): void {
    this.httpDataService.getList().subscribe((response: any) => {
      if (!response){
        return;
      }
      this.dataSource = new MatTableDataSource(response.content);
    });
  }
  editItem(element): void {
    console.log(element);
    this.appointmentData = _.cloneDeep(element);
    this.isEditMode = true;
  }
  cancelEdit(): void {
    this.isEditMode = false;
    this.appointmentForm.resetForm();
  }
  deleteItem(id): void {
    this.httpDataService.deleteItem(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Appointment) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addAppointment(): void {
    const newAppointment = {
      currentDatetime: this.appointmentData.currentDatetime,
      scheduledDatetime: this.appointmentData.scheduledDatetime,
      topic: this.appointmentData.topic,
      meetingLink: this.appointmentData.meetingLink,
      ownerId: this.appointmentData.ownerId,
      consultantId: this.appointmentData.consultantId };
    this.httpDataService.createItem(newAppointment).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }
  updateAppointment(): void {
    this.httpDataService.updateItem(this.appointmentData.id, this.appointmentData)
      .subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data.map((o: Appointment) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
        this.cancelEdit();
      });
  }
  onSubmit(): void {
    if (this.appointmentForm.form.valid) {
      if (this.isEditMode) {
        this.updateAppointment();
      } else {
        this.addAppointment();
      }
    } else {
      console.log('Invalid Data');
    }
  }
}

