<?php
use Illuminate\Http\Response;
use function GuzzleHttp\json_decode;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();
Route::view('/{path?}', 'react');//->middleware('auth');

Route::resource('/user', 'UsersController')->only([
    'index', 'store', 'show', 'update', 'destroy'
]);
Route::resource('/leagues/{league}/prode', 'ProdeController')->only([
    'index', 'store', 'show','update', 'destroy'
]);

//Datos sobre los campeonatos, equipos, partidos y puntajes
Route::get('/leagues', 'CampeonatosController@index');
Route::get('/leagues/{league}', 'CampeonatosController@show');

Route::get('/leagues/{league}/teams', 'EquiposController@index');
Route::get('/leagues/{league}/teams/{team}', 'EquiposController@show');

Route::get('/leagues/{league}/matches', 'PartidosController@index');
Route::get('/leagues/{league}/matches/{match}', 'PartidosController@show');

Route::get('/leagues/{league}/standings', 'PosicionesCampeonatosController@index');
Route::get('/leagues/{league}/standings/{match}', 'PosicionesCampeonatosController@show');
