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
Route::get('api/v1/color','colorController@index');
Route::get('api/v1/size','sizeController@index');
Route::get('api/v1/modelo','modeloController@index');
Route::get('api/v1/notebook/get/{colorid}/{modelid}/{sizeid}','notebookController@getNotebook');
Route::resource('api/v1/notebook','notebookController', ['only' => ['index', 'show','getImage']]);
Route::resource('api/v1/notebookuser','notebookuserController', ['only' => ['index', 'show','update','store','destroy']]);
