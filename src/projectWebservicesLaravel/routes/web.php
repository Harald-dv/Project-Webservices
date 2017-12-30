<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return View::make('index');
});


/*LOGIN ROUTES*/

Route::post('/loginL', 'AuthenticateController@authenticate');

Route::get('/loginL', function() {
    return View::make('tmplogin'); // resources/views/tmplogin.blade.php
});

Route::get('/getuser', 'AuthenticateController@getAuthenticatedUser');

Route::any('{catchall}', function() {
  return View::make('index');
})->where('catchall', '.*');
