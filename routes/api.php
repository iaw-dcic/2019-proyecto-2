<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the 'api' middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('teams', 'TeamController@index');

Route::get('matches/{ronda}', 'MatchController@index');

Route::get('predictions','PredictionController@indice')->middleware('auth:api');

Route::post('predictions','PredictionController@store')->middleware('auth:api');

Route::post('predictions/partidos','PredictionController@storeCuadro')->middleware('auth:api');

Route::post('predictions/add','PredictionController@addPronostico')->middleware('auth:api');

Route::get('predictions/{id}','PredictionController@show')->middleware('auth:api');

Route::get('predictions/{id}/nombre','PredictionController@nombre')->middleware('auth:api');

Route::put('predictions/{id}', 'PredictionController@update')->middleware('auth:api');
