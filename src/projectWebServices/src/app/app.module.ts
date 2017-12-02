import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import {RouterModule, Routes} from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { OverzichtComponent } from './overzicht/overzicht.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { NewReportComponent } from './report/new-report/new-report.component';
import { EditReportComponent } from './report/edit-report/edit-report.component';

const appRoutes: Routes = [
  { path: '', component: OverzichtComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search/:date', component: DatePickerComponent },
  { path: 'report', component: ReportComponent, children: [
    { path: 'new', component: NewReportComponent },
    { path: 'edit/:date', component: EditReportComponent }
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    OverzichtComponent,
    ReportComponent,
    LoginComponent,
    NewReportComponent,
    EditReportComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
