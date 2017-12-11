import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {ReportDbService} from '../../report-db.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css'],
  providers: [ReportDbService]
})
export class NewReportComponent implements OnInit {

  newReport: {date: string, instructorId: number, body: string};

  today = new Date();
  month = this.today.getMonth() + 1; // returns the day of the month (from 1 to 31)
  day = this.today.getDate();
  year = this.today.getFullYear();// returns the year (four digits)

  instructorName="Naam Onbekend";
  instructorId="1";
  selectedDate=(this.year + "-" + this.month + "-" + this.day);
  reportContent="";

  constructor(private db: ReportDbService, private http: HttpClient) { }

  ngOnInit() {
  }

  confirmClicked(){
    this.newReport= {date: this.selectedDate, instructorId: parseInt(this.instructorId), body: this.reportContent}
    this.db.addReport(this.newReport);
  }

}
