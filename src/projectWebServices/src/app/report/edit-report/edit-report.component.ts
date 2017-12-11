import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {ReportDbService} from '../../report-db.service';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.css'],
  providers: [ReportDbService]
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
