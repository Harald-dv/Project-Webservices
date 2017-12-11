import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { ReportDbService } from '../report-db.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [ReportDbService]

})
export class DatePickerComponent implements OnInit {
  date: number;
  instructor: {id: number, name: string}[] = [];
  report: {id: number, date: string, instructorId: number, body: string};
  instructorId=1;
  show: boolean = false;

  constructor(private route: ActivatedRoute, private db: ReportDbService, private http: HttpClient){}

  ngOnInit() {
    //this.date = this.route.snapshot.params['date'];
    this.route.params.subscribe(
      (params: Params) => {
        this.date = params['date'];
      }
    );

    this.report = {id: 255, date: this.date.toString(), instructorId: this.instructorId, body: 'dit is de body maar nog zonder inhoud'};

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
    this.date = this.route.snapshot.params['date'];
  }
}
