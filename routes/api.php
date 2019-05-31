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
Route::get('/telas','TelasController@listadoTelas')->name('listadoTelas');
//Listado de talles
Route::get('/talles','TallesController@listadoTalles')->name('listadoTalles');
//Listado de colores
Route::get('/colores','ColourController@listadoColores')->name('listadoColores');