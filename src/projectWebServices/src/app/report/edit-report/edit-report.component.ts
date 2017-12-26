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
  date: number;
  instructor: {id: number, name: string}[] = [];
  report: {id: number,date: string, instructorId: number, body: string};

  instructorId=1;
  show1: boolean = false;
  show2: boolean = false;
  show: boolean = false;
  noReport: boolean = false;

  constructor(private route: ActivatedRoute, private db: ReportDbService, private http: HttpClient) { }

  confirmClicked(){
    this.db.patchReport(this.report);
    //console.log("clicked, report sent");
    //console.log(this.report);
  }

  checkShow(){
    this.show=this.show1 &&  this.show2;
    this.noReport = !this.show;
    //console.log("checkShow");
  };

  onDateChange(){
        this.db.getInstructor().subscribe(
          (data) => {
            this.instructor= data;
            //console.log(this.db.instructor);
          },
          (err: HttpErrorResponse) => {
            console.log(err);
            this.noReport = true;
            this.show1=false;
            this.show2=false;
            this.checkShow();

          },
          () => {
            //console.log("Klaar!");
            this.show1=true;
            this.checkShow();
          }
        )

        this.db.getReportByDate(this.date).subscribe(
          (data) => {
            this.report= data;
            //console.log(this.db.instructor);
          },
          (err: HttpErrorResponse) => {
            console.log(err);
            this.noReport = true;
            this.show1=false;
            this.show2=false;
            this.checkShow();
          },
          () => {
            //console.log("Klaar!");
            this.show2=true;
            this.checkShow();
          }
        )
        //console.log("onDateChange");

  };

  ngOnInit() {
    //this.date = this.route.snapshot.params['date'];
    this.route.params.subscribe(
      (params: Params) => {
        this.date = params['date'];
        this.onDateChange();
      }
    );
    //this.report = {id: 255, date: this.date.toString(), instructorId: this.instructorId, body: 'dit is de body maar nog zonder inhoud'};

    this.date = this.route.snapshot.params['date'];
    //console.log("ngOnInit");
  }//end of ngOnInit
}
