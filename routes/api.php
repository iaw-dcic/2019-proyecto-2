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

//rutas de los componentes.

//AVM REMERA
//Route::post('/Remera', 'RemeraController@guardar')->middleware('auth:api');
//Route::delete('/MisRemeras/{remera_id}', 'RemeraController@eliminar')->middleware('auth:api');
//Route::put('/Remera','RemeraController@modificar')->middleware('auth:api');

//Elementos agregadoss
Route::get('/stampas','ElementosController@getStampas');

Route::get('/colores','ElementosController@getColores');


//Este es para mostrar las remeras guardadas del usuario.