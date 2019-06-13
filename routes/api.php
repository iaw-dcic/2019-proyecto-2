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
Route::post('/guardar','RemeraController@guardar');
Route::delete('/delete/{remera_id}', 'RemeraController@eliminar');
//Route::post('/Remera','RemeraController@modificar')->middleware('auth:api');

//Elementos agregadoss
Route::get('/stampas','ElementosController@getStampas');
Route::get('/colores','ElementosController@getColores');
Route::get('/talles','ElementosController@getTalles');


//Este es para mostrar las remeras guardadas del usuario.
Route::get('/getRemeras','RemeraController@getRemeras');