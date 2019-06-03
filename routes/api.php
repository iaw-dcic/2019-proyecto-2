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

Route::middleware('auth:api')->get('/user', function(Request $request) {
    return $request->user();
});
//Route::get('user' , 'UserController@getuser');
Route::post('insertpronostico' , 'UserController@addPronostico');
Route::get('ultimopronostico' , 'UserController@ultimoPronostico');
Route::get('cantidadpronosticos','UserController@cantidadPronosticos');
Route::post('insert','PartidosController@store');
Route::get('partidos/{ronda}', 'PartidosController@getPartidosRonda');
Route::get('octavos/{i}', 'PartidosController@octavos');
Route::get('pronostico/{ronda}/{pronostico}', 'PartidosController@getPartidosPronostico');
Route::get('partidos_dos/{ronda}', 'PartidosController@partidos_de_a_dos');
Route::post('eliminarpronostico', 'PartidosController@eliminarPronostico');
Route::post('actualizar', 'PartidosController@actualizar');
 