<?php

Auth::routes();
Route::view('/', 'react');
Route::view('/{path?}', 'react');//->middleware('auth');

Route::resource('/user', 'UsersController')->only([
    'index', 'store', 'show', 'update', 'destroy'
]);
Route::resource('/leagues/{league}/prode', 'ProdeController')->only([
    'index', 'store', 'show','update', 'destroy'
]);

//Datos sobre los campeonatos, equipos, partidos y puntajes

//Campeonatos
Route::get('/leagues', 'CampeonatosController@getCampeonatos');
Route::get('/leagues/{league}', 'CampeonatosController@getCampeonato');

//Equipos
Route::get('/teams', 'EquiposController@getEquipos');
Route::get('/teams/{team}', 'EquiposController@getEquipo');
Route::get('/leagues/{league}/teams', 'EquiposController@getEquiposPorCampeonato');
Route::get('/leagues/{league}/groups', 'EquiposController@getGrupos');

//Partidos
Route::get('/matches', 'PartidosController@getPartidos');
Route::get('/matches/{match}', 'PartidosController@getPartido');
Route::get('/leagues/{league}/matches', 'PartidosController@getPartidosPorCampeonato');
Route::get('/leagues/{league}/matches/{match}', 'PartidosController@getPartidoPorCampeonato');
Route::get('/leagues/{league}/groups/matches', 'PartidosController@getPartidosPorGrupo');

//Puntajes
Route::get('/leagues/{league}/standings/teams', 'PosicionesCampeonatosController@getPuntajesPorEquipos');
Route::get('/leagues/{league}/standings/teams/{team}', 'PosicionesCampeonatosController@getPuntajesDeEquipo');
Route::get('/leagues/{league}/standings/groups', 'PosicionesCampeonatosController@getPuntajesPorGrupos');

//
