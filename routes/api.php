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
Route::post('/PanelSupremo', 'RemeraController@guardar')->middleware('auth:api');
Route::delete('/PanelSupremo/{remera_id}', 'RemeraController@eliminar')->middleware('auth:api');

//Este es para mostrar las remeras guardadas del usuario.
//Route::get('/PanelSupremo', 'RemeraController@getRemeras')->middleware('auth:api');