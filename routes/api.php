<?php

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

Route::middleware('auth:api')->get('/user', 'UserController@getLoggedInUser');
Route::middleware('auth:api')->get('{user}/shirts', 'ShirtController@index');
Route::middleware('auth:api')->get('shirts/{shirt}', 'ShirtController@show');
Route::middleware('auth:api')->post('shirts/store/{user}', 'ShirtController@store');
Route::middleware('auth:api')->patch('shirts/{shirt}', 'ShirtController@update');
Route::middleware('auth:api')->delete('shirts/{shirt}', 'ShirtController@destroy');
Route::middleware('auth:api')->get('static/images/shirts/{type}/{color}', 'ShirtController@getShirtImage');
Route::get('static/images/decorations/{id}', 'ShirtController@getDecorationImage');
Route::get('static/images/decorations', 'ShirtController@getAllDecorations');
