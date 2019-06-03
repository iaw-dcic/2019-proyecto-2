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

Route::get('products','ProductsController@index');

Route::post('products','ProductsController@store')->middleware('auth');

Route::get('products/{id}','ProductsController@show');

Route::put('products/{id}','ProductsController@update');

Route::delete('products/{id}','ProductsController@delete');

Route::get('colors', 'ColorsController@index');

Route::get('images', 'ImagesController@index');

Route::get('fundas', 'FundasController@index');

Route::get('colorcase/{id_case}/{id_color}', 'ColorCasesController@show');