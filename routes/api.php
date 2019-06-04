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

Route::get('donuts','DonutController@index');
Route::post('donuts','DonutController@store')->middleware('auth');
Route::get('donuts/{id}','DonutController@show');
Route::put('donuts/{id}','DonutController@update');
Route::delete('donuts/{id}','DonutController@delete');

Route::get('sabores', 'SaborController@index');
Route::get('glaseados', 'GlaseadoController@index');
Route::get('decoraciones', 'DecoracionController@index'); 