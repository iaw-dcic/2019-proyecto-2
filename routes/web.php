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
Route::view('/{path?}', 'react')->middleware('auth');

//Route::post('remeras', 'RemerasController@store');
//Route::get('creaciones', 'RemerasController@show');
//Route::post('eliminarRemera/{id}', 'RemerasController@destroy');

