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

// Lista de resultados
Route::get('results','ResultsController@index');

 // Resultado en particular
 Route::get('result/{id}','ResultsController@show');

 // Creo un nuevo resultado
 Route::post('result','ResultsController@store');

// Elimino un resultado
Route::delete('result/{id}','ResultsController@destroy');

// Lista de equipos
Route::get('teams','TeamsController@index');

