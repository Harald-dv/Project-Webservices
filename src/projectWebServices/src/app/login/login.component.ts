import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('openModal') openModal:ElementRef;

  title = 'app works!';
  loggedIn=0;

  ngOnInit(){
   this.openModal.nativeElement.click();
  }

}
