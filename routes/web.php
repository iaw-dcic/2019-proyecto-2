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

Route::get('/','InicioController@index');
//ReadMe
Route::get('/readme', 'readMeController@index')->name('readme');
//Componente editor de remeras
Route::view('/{path?}', 'react')->middleware('auth');

