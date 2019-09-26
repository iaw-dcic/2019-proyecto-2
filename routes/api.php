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

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::group(['middleware' => ['auth:api']], function () {
    // all routes to protected resources are registered here
    //Prodes
    Route::resource('/prodes', 'ProdeController')->only([
        'index', 'store', 'show','update', 'destroy'
    ]);

    //Obtiene el ultimo ID para crear un nuevo prode
    Route::get('/create_prode', 'ProdeController@getNewId');

    //Equipos
    Route::get('/teams', 'EquiposController@getEquipos');
    Route::get('/teams/{team}', 'EquiposController@getEquipo');
});
