<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', 'PassportController@login')->name('loginAPI');
Route::post('register', 'PassportController@register');

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

Route::get('colores', 'ColoresController@index');
Route::get('cuello', 'CuelloController@index');
Route::get('tipo', 'TipoController@index');

Route::post('remeras', 'RemerasController@store');*/
Route::middleware('auth:api')->group(function () {
    Route::get('user', 'PassportController@details');
    Route::get('logout', 'PassportController@logout');

    Route::get('colores', 'ColoresController@index');
    Route::get('cuello', 'CuelloController@index');
    Route::get('tipo', 'TipoController@index');

    Route::post('remeras', 'RemerasController@store');
});
