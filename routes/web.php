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

// Route::get('donuts','DonutController@index');
// Route::post('donuts','DonutController@store')->middleware('auth');
// Route::get('donuts/{id}','DonutController@show');
// Route::put('donuts/{id}','DonutController@update');
// Route::delete('donuts/{id}','DonutController@delete');

// Route::get('sabores', 'SaborController@index');
// Route::get('glaseados', 'GlaseadoController@index');
// Route::get('decoraciones', 'DecoracionController@index');