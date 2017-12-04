import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.css']
})
export class EditReportComponent implements OnInit {
  date=0;
  instructorName="Naam Onbekend"
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.date = this.route.snapshot.params['date'];
    this.date = this.route.snapshot.params['date'];

    this.route.params
    .subscribe(
      (params: Params) => {
        this.date = params['date'];
      }
    );

  }

}
