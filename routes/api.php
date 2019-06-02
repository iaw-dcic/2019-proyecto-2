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

Route::get('donuts','DonutsController@index');
Route::post('donuts','DonutsController@store');
Route::get('donuts/{id}','DonutsController@show');
Route::put('donuts/{id}','DonutsController@update');
Route::delete('donuts/{id}','DonutsController@delete');

Route::get('sabores', 'SaborController@index');
Route::get('glaseados', 'GlaseadoController@index');
Route::get('decoraciones', 'DecoracionController@index'); 