<?php

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
Route::get('/equipos', 'EquipoController@index')->name('index');
// Route::get('/partidos-init', 'ListaPartidoControlle@getInicialPartidos');
Route::put("/partidos", 'ListaPartidoController@update')->middleware('auth');
Route::post("/partidos", 'ListaPartidoController@store')->middleware('auth');
Route::get("/partidos/{id}", 'ListaPartidoController@getLista');
Route::get("/partidos", 'ListaPartidoController@getAllPartidos');

Route::view('/{path?}', 'react');//->middleware('auth');
Route::get("/partidos", 'ListaPartidoController@getAllPartidos');

//redireccionar invalidos 
Route::any('{query}', 
  function() { return redirect('/'); })
  ->where('query', '.*');