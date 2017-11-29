import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  dateString="testdatum";
  date = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.date = this.route.snapshot.params['date'];
  }

}
