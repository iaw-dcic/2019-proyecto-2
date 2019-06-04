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

Route::post('/tshirts', 'TShirtsController@store')->middleware('auth:api');
Route::get('/tshirts', 'TShirtsController@index')->middleware('auth:api');
Route::delete('/tshirts/{tshirtid}', 'TShirtsController@destroy')->middleware('auth:api');
Route::get('/images', 'ImagesController@index');
