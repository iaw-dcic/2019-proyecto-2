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
Route::get('/perfil', 'UserController@profile')->name ('Perfil')->middleware('auth');
Route::post('/perfil', 'UserController@update_profile')->middleware('auth');

Route::view('/{path?}', 'react')->middleware('auth');
