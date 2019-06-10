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

Route::get('/torneoPred', 'TorneosController@pred');
Route::get('/torneos', 'TorneosController@show')->middleware('auth:api');
Route::post('/torneos', 'TorneosController@save')->middleware('auth:api');
Route::get('/torneos/{torneoId}', 'TorneosController@getTorneo')->middleware('auth:api');
Route::put('/torneos/{torneoId}', 'TorneosController@updateTorneo')->middleware('auth:api');
Route::delete('/torneos/{torneoId}', 'TorneosController@deleteTorneo')->middleware('auth:api');