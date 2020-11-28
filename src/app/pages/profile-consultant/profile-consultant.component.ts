import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile-consultant',
  templateUrl: './profile-consultant.component.html',
  styleUrls: ['./profile-consultant.component.css']
})
export class ProfileConsultantComponent implements OnInit {

  id = 0;
  sourceConsultant: {};
  constructor(private ruta: ActivatedRoute, private http: HttpClient) {
    this.ruta.params.subscribe(param => {
      this.id = param.id;
      console.log(param.id);
      console.log(this.sourceConsultant);
    });
  }

  ngOnInit(): void {
    this.http.get(`https://restcodewebapplication.azurewebsites.net/api/consultants/${this.id}`)
      .subscribe((data: any[]) => this.sourceConsultant = data);
  }

}
