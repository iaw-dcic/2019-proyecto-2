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

use Illuminate\Http\Request;
use App\Avatar;

Auth::routes();


// Todas las caracteristicas
Route::get('/avatar/caracteristicas', 'AvatarController@getCaracteristicas');
// Opciones de una caracteristica
Route::get('/avatar/caracteristicas/{caracteristica}', 'AvatarController@opciones');
// Todas las caracteristicas con sus respectivas opciones
Route::get('/avatar/caracteristicas-con-opciones', 'AvatarController@caracteristicasConOpciones');
// Foto del avatar
Route::get('/avatar', 'AvatarController@foto');


Route::get('/user/avatar', 'UserController@show');
Route::put('/user/avatar', 'UserController@update');


Route::view('/{path?}', 'welcome');//->middleware('auth');


