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

//Route::view('/{path?}', 'react')->middleware('auth'); TE ODIO LINEA

Route::get('teams', 'TeamController@index'); //muestra el listado de equipos que juegan los playoffs
Route::get('matches/{ronda}', 'MatchController@index'); //muestra el listado de equipos que juegan los playoffs

Route::get('predictions','PredictionController@indice')->middleware('auth:api'); //muestra el listado de predicciones de un usuario
Route::post('predictions','PredictionController@store')->middleware('auth:api'); //cuando creo una nueva prediccion
Route::post('predictions/partidos','PredictionController@storeCuadro')->middleware('auth:api'); //cuando creo una nueva prediccion
Route::post('predictions/add','PredictionController@addPronostico')->middleware('auth:api'); //cuando creo una nueva prediccion

Route::get('predictions/{id}','PredictionController@show');
Route::put('predictions/{id}', 'PredictionController@update')->middleware('auth:api');


//Route::get('/predictions', 'PredictionController@index'); //muestra el listado de predicciones de un usuario
