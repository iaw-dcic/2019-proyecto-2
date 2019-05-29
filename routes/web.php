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

Route::get('/', 'PagesController@home')->name('home');

Auth::routes();

Route::view('/app/{path?}', 'react')->middleware('auth')->name('react');

Route::get('/about', 'PagesController@about')->name('about');

Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

Route::post('/app/avatars', 'TaskController@store')->middleware('auth');

Route::post('/app/avatars/{avatar}', 'TaskController@update')->middleware('auth');