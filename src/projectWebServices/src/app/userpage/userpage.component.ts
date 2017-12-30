import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  instructorName = "Onbekend";
  instructorMail = "Onbekend@email.be";

  password1 ="";
  password2 ="";

  show=true;

  constructor() { }

  ngOnInit() {
  }

}
