import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';

@Injectable()
export class ReportDbService {

  reportObs: Observable<any>;
  instrObs: Observable<any>;

  instructor: {id: number, name: string}[] = [];
  report: {id: number, date: string, instructorId: number, body: string}[] = [];

  constructor(private http: HttpClient) {
  }

  getReport(){
    this.reportObs = this.http.get('http://localhost:3000/report');
    return this.reportObs;
  }

  getInstructor(){
    this.instrObs = this.http.get('http://localhost:3000/instructor');
    return this.instrObs;
  }

}
