import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home-consultant',
  templateUrl: './home-consultant.component.html',
  styleUrls: ['./home-consultant.component.css']
})
export class HomeConsultantComponent implements OnInit {
  id = 0;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(param => {
      this.id = param.id;
      console.log(param.id);
    });
  }

  ngOnInit(): void {
  }

}
