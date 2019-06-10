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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('colores', 'ColoresController@index');
Route::get('cuello', 'CuelloController@index');
Route::get('tipo', 'TipoController@index');
Route::get('creaciones', 'RemerasController@show');
Route::post('remeras', 'RemerasController@store')->middleware('auth:api');
Route::get('creaciones', 'RemerasController@show')->middleware('auth:api');
Route::post('eliminarRemera/{id}', 'RemerasController@destroy')->middleware('auth:api');