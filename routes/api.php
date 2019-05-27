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
  auth('api')->user();
});
Route::post('insert','PartidosController@store');
Route::get('partidos/{ronda}', 'PartidosController@getPartidosRonda');
Route::get('partidos_dos/{ronda}', 'PartidosController@partidos_de_a_dos');
 
  