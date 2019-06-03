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
//Listado de telas
Route::get('/telas','VistaDiseñarController@listadoTelas');
//Listado de talles
Route::get('/talles','VistaDiseñarController@listadoTalles');
//Listado de colores
Route::get('/colores','VistaDiseñarController@listadoColores');
//Listado de logos
Route::get('/logos','VistaDiseñarController@listadoLogos');
//Guardar Remera
Route::post('/crearDiseño','RemeraController@store');
//Mostrar mis remeras
Route::get('/misDiseños','RemeraController@MisDiseños');
//Borrar remera 
Route::delete('/borrarRemera/{id}','RemeraController@delete');

