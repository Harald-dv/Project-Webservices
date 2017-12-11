import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  today = new Date();

  month = this.today.getMonth() + 1

// returns the day of the month (from 1 to 31)
  day = this.today.getDate()

// returns the year (four digits)
  year = this.today.getFullYear()

  instructorName="Naam Onbekend";
  instructorId="";
  selectedDate=(this.year + "-" + this.month + "-" + this.day);
  reportContent="";



  constructor() { }

  ngOnInit() {
  }

}
