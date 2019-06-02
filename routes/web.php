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

//Usuario registrado
Auth::routes();
//Route::get('/home','Controller@index')->middleware('auth');
Route::view('/{path?}', 'home')->middleware('auth');

//Usuario no registrado
//Route::get('/','NotRegisterController@index');

