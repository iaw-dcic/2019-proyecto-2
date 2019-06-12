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




Route::get('octavos', 'EquipoController@getOctavos');
Route::get('equipos', 'EquipoController@index')->middleware('auth:api');
Route::post('equipos', 'EquipoController@store')->middleware('auth:api');
Route::get('equipos/{prode}', 'EquipoController@show')->middleware('auth:api');
Route::put('equipos/{prode}', 'EquipoController@update')->middleware('auth:api');
Route::delete('equipos/{id}', 'EquipoController@destroy')->middleware('auth:api');