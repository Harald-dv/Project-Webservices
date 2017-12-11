import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {ReportDbService} from '../report-db.service';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.css'],
  providers: [ReportDbService]
})
export class OverzichtComponent implements OnInit {

  instructor: {id: number, name: string}[] = [];
  report: {id: number, date: string, instructorId: number, body: string}[] = [];
  show: boolean = false;

  constructor(private db: ReportDbService, private http: HttpClient) {
  }
  ngOnInit() {
    this.db.getReport().subscribe(
      (data) => {
        this.report= data;
        //console.log(this.db.report);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      },
      () => {
      }
    )

    this.db.getInstructor().subscribe(
      (data) => {
        this.instructor= data;
        //console.log(this.db.instructor);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      },
      () => {
        //console.log("Klaar!");
        this.show=true;
      }
    )
  }
}
