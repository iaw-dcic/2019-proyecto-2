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

 
Auth::routes();
Route::get('/readme',function () {
    return view('readme');
})->name('readme');
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
Route::view('/home', 'react')->middleware('auth');

 Route::get('auth/{provider}', 'UserController@redirectToProvider')->name('social.auth');
Route::get('auth/{provider}/callback', 'UserController@handleProviderCallback');
 