<?php

use Grambas\FootballData\FootballData;

Auth::routes();
Route::view('/', 'react');
Route::view('/{path?}', 'react');//->middleware('auth');

Route::resource('/api/user', 'UsersController')->only([
    'index', 'store', 'show', 'update', 'destroy'
]);
Route::resource('/api/user/{user}/prodes', 'ProdeController')->only([
    'index', 'store', 'show','update', 'destroy'
]);

//Datos sobre los equipos, partidos y puntajes
//Equipos
Route::get('/api/user/{user}/teams', 'EquiposController@getEquipos');
Route::get('/api/user/{user}/teams/{team}', 'EquiposController@getEquipo');

//Partidos
Route::get('/api/user/{user}/prodes/{prode}/matches', 'PartidosController@getPartidos');
Route::get('/api/user/{user}/prodes/{prode}/matches/{match}', 'PartidosController@getPartido');
Route::get('/api/user/{user}/prodes/{prode}/groups/matches', 'PartidosController@getPartidosPorGrupos');
