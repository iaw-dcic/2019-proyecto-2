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

/**Esta comentado porque hace falta conectar la base de datos, luego de eso descomentarlo */
Route::view('/{path?}', 'react')->middleware('auth');


Route::get('/home', 'HomeController@index')->name('home');
