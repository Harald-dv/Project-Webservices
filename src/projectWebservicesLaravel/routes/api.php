<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//report
Route::post('/addreport', [
  'uses' => 'ReportController@addReport'
]);

Route::get('/getreports', [
  'uses' => 'ReportController@getReports'
]);

Route::get('/getreport/{date}', [
  'uses' => 'ReportController@getReport'
]);

Route::get('/getreport/id/{id}', [
  'uses' => 'ReportController@getReportById'
]);

Route::patch('/patchreport', [
  'uses' => 'ReportController@patchReport'
]);

Route::delete('/deletereport/{id}', [
  'uses' => 'ReportController@deleteReport'
]);

//instructor
Route::get('/getinstructors', [
  'uses' => 'InstructorController@getInstructors'
]);

Route::get('/getinstructor/{id}', [
  'uses' => 'InstructorController@getInstructor'
]);
