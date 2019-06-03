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
Route::view('/', 'react');
Route::view('/{path?}', 'react')->middleware('auth');

Route::resource('users', 'UserController')->middleware('auth');

Route::get('api/prode','Api\ProdeController@index')->middleware('auth');
Route::post('api/prode/store','Api\ProdeController@store')->middleware('auth');
Route::delete('api/prode/delete/{id}','Api\ProdeController@destroy')->middleware('auth');
Route::get('api/prode/edit/{id}','Api\ProdeController@edit')->middleware('auth');
Route::put('api/prode/update/{id}','Api\ProdeController@update')->middleware('auth');