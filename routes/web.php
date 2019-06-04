<?php



Auth::routes();
Route::get('/', 'IndexController@index')->middleware('guest');
Route::get('/home', 'IndexController@index')->middleware('auth');

//Usuarios
Route::resource('/api/user', 'UsersController')->only([
    'index', 'store', 'show', 'update', 'destroy'
]);

//Prodes
Route::resource('/api/user/{user}/prodes', 'ProdeController')->only([
    'index', 'store', 'show','update', 'destroy'
]);

//Obtiene el ultimo ID para crear un nuevo prode
Route::get('/api/prodes/getNewId', 'ProdeController@getNewId');

//Equipos
Route::get('/api/teams', 'EquiposController@getEquipos');
Route::get('/api/teams/{team}', 'EquiposController@getEquipo');

//Partidos
Route::get('/api/user/{user}/prodes/{prode}/matches', 'PartidosController@getPartidos');
Route::get('/api/user/{user}/prodes/{prode}/matches/{match}', 'PartidosController@getPartido');
Route::get('/api/user/{user}/prodes/{prode}/groups/matches', 'PartidosController@getPartidosPorGrupos');
