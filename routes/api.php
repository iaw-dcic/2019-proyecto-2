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

Route::get('/team', 'TeamController@index');
Route::middleware('auth:api')->get('/prediction', 'PredictionController@index');
Route::middleware('auth:api')->post('/prediction', 'PredictionController@store');
//Route::resource('/match', 'MatchController');
Route::middleware('auth:api')->post('/match', 'MatchController@store');

Route::get('/token', 'TeamController@token');
