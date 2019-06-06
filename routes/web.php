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

// --------------------------------- API ------------------------------------------
// Todas las caracteristicas
Route::get('/avatar/caracteristicas', 'AvatarController@getCaracteristicas');
// Opciones de una caracteristica
Route::get('/avatar/caracteristicas/{caracteristica}', 'AvatarController@getOpciones');
// Todas las caracteristicas con sus respectivas opciones
Route::get('/avatar/caracteristicas-con-opciones', 'AvatarController@caracteristicasConOpciones');
// Imagen del avatar
Route::get('/avatar', 'AvatarController@foto');
// User
Route::get('/user/avatar', 'UserController@getAvatar');
Route::put('/user/avatar', 'UserController@updateAvatar');
//---------------------------------------------------------------------------------


Route::view('/readme', 'readme')->name('readme');
Route::view('/{path?}', 'home')->name('home')->middleware('auth');



