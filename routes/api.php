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

Route::delete('eliminar_pronostico/{id}', 'PronosticoController@eliminar_pronostico');

Route::post('editar_pronostico', 'PronosticoController@editar_pronostico');
Route::get('get_pronostico/{id}', 'PronosticoController@get_pronostico');


Route::get('get_pronosticos', 'PronosticoController@get_pronosticos');
Route::get('get_equipos', 'PronosticoController@get_equipos');
Route::get ('crear_pronostico' ,'PronosticoController@crear_pronostico');
Route::post('crear_pronostico' ,'PronosticoController@crear_pronostico_BD');

//Route::view('/Home', 'react');//->middleware('auth');
//Route::view('/{path?}', 'inicio');//->middleware('auth');
