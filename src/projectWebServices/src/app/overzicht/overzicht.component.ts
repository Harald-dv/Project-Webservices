import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.css']
})
export class OverzichtComponent implements OnInit {
  reportObs: Observable<any>;
  instrObs: Observable<any>;


  instructor: {id: number, name: string}[] = [];
  report: {id: number, date: string, instructorId: number, body: string}[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.reportObs = this.http.get('http://localhost:3000/report');
    this.instrObs = this.http.get('http://localhost:3000/instructor');

    this.reportObs.subscribe(
      (data) => {
        this.report=data;
        //console.log(this.report);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      },
      () => {
        //console.log("Klaar!");
      }
    )

    this.instrObs.subscribe(
      (data) => {
        this.instructor=data;
        console.log(this.instructor);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      },
      () => {
        //console.log("Klaar!");
      }
    )
  }

}
