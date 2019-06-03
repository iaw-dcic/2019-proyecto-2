<?php

Auth::routes();
Route::view('/', 'react');
//Route::view('/{path?}', 'react');//->middleware('auth');

Route::post('/api/user/register', 'UsersController@register');
Route::post('/api/user/login', 'UsersController@login');
Route::post('/api/user/logout', 'UsersController@logout');
Route::post('/api/user/getAuthUser', 'UsersController@getAuthUser');

Route::resource('/api/user', 'UsersController')->only([
    'index', 'store', 'show', 'update', 'destroy'
]);

Route::resource('/api/user/{user}/prodes', 'ProdeController')->only([
    'index', 'store', 'show','update', 'destroy'
]);

Route::get('/api/prodes/getNewId', 'ProdeController@getNewId');

//Datos sobre los equipos, partidos y puntajes
//Equipos
Route::get('/api/user/{user}/teams', 'EquiposController@getEquipos');
Route::get('/api/user/{user}/teams/{team}', 'EquiposController@getEquipo');

//Partidos
Route::get('/api/user/{user}/prodes/{prode}/matches', 'PartidosController@getPartidos');
Route::get('/api/user/{user}/prodes/{prode}/matches/{match}', 'PartidosController@getPartido');
Route::get('/api/user/{user}/prodes/{prode}/groups/matches', 'PartidosController@getPartidosPorGrupos');
