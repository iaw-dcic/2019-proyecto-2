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


Route::get('equipos', 'PronosticoController@equipos')->middleware('auth:api');
Route::get ('crear_pronostico' ,'PronosticoController@crear_pronostico')->middleware('auth:api');
Route::post('crear_pronostico' ,'PronosticoController@crear_pronostico_BD')->middleware('auth:api');

//Route::view('/Home', 'react');//->middleware('auth');
//Route::view('/{path?}', 'inicio');//->middleware('auth');
