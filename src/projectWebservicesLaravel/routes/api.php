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

//api/newreport
Route::post('/addreport', [
  'uses' => 'ReportController@addReport'
]);

Route::get('/getreports', [
  'uses' => 'ReportController@getReports'
]);

Route::get('/getreport/{date}', [
  'uses' => 'ReportController@getReport'
]);

Route::patch('/patchreport', [
  'uses' => 'ReportController@patchReport'
]);

//instructor
Route::get('/getinstructors', [
  'uses' => 'InstructorController@getInstructors'
]);

Route::get('/getinstructor/{id}', [
  'uses' => 'InstructorController@getInstructor'
]);
