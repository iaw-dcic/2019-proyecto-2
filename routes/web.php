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
//Route::get('/home','Controller@index')->middleware('auth');
//Route::view('/{path?}', 'home')->middleware('auth');

Route::view('/home', 'home')->middleware('auth');
Route::view('/{path?}', 'react');

Route::get('donuts','DonutsController@index');
Route::post('donuts','DonutsController@store')->middleware('auth');
Route::get('donuts/{id}','DonutsController@show');
Route::put('donuts/{id}','DonutsController@update');
Route::delete('donuts/{id}','DonutsController@delete');

Route::get('sabores', 'SaborController@index');
Route::get('glaseados', 'GlaseadoController@index');
Route::get('decoraciones', 'DecoracionController@index');