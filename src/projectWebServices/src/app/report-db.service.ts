import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';

@Injectable()
export class ReportDbService {

  reportObs: Observable<any>;
  instrObs: Observable<any>;
  addReportObs: Observable<any>;
  patchReportObs: Observable<any>;

  instructor: {id: number, name: string}[] = [];

  newReport: {id: number, date: string, instructorId: number, body: string};
  reportPatch: {id: number, date: string, instructorId: number, body: string};

  constructor(private http: HttpClient, private route: ActivatedRoute,
  private router: Router,) {
  }

  addReport(newReport: {date: string, instructorId: number, body: string}){
    //console.log(newReport);
    this.addReportObs = this.http.post('/api/addreport',
    JSON.stringify(newReport),
    {headers: new HttpHeaders().set('Content-type', 'application/json')}
  );
  //console.log("report gepost:",JSON.stringify(newReport));

    this.addReportObs.subscribe(
      () => {
      },
      (err: HttpErrorResponse)=> {
        console.log(err);
      },
      ()=>{
        this.router.navigate(['/']);
      }
    )
  }

  getReport(){
    this.reportObs = this.http.get('/api/getreports');
    return this.reportObs;
  }

  getReportByDate(date){
    this.reportObs = this.http.get('api/getreport/'+date);
    return this.reportObs;
  }

  patchReport(reportPatch: {id: number, date: string, instructorId: number, body: string}){
    this.patchReportObs = this.http.patch('/api/patchreport',
    JSON.stringify(reportPatch),
    {headers: new HttpHeaders().set('Content-type', 'application/json')},
  );
  //console.log("report aanpassing",JSON.stringify(reportPatch));
  this.patchReportObs.subscribe(
    () => {
    },
    (err: HttpErrorResponse)=> {
      console.log(err);
    },
    ()=>{
      this.router.navigate(['/']);
    }
  )
  }

  getInstructor(){
    this.instrObs = this.http.get('/api/getinstructors');
    return this.instrObs;
  }

}
