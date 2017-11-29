import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import {RouterModule, Routes} from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { OverzichtComponent } from './overzicht/overzicht.component';
import { EditReportComponent } from './edit-report/edit-report.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
{ path: '', component: OverzichtComponent },
{ path: 'edit', component: EditReportComponent },
{ path: 'login', component: LoginComponent },
{ path: 'search/:date', component: DatePickerComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    OverzichtComponent,
    EditReportComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
