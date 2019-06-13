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

Route::post('login', 'PassportController@login')->name('loginAPI');
Route::post('register', 'PassportController@register');


Route::middleware('auth:api')->group(function () {

    // User Routes
    Route::get('user', 'PassportController@details');
    Route::get('logout', 'PassportController@logout');

    // Todos los partidos de un prode
    Route::get('/prode/partidos/{id}', 'ProdeController@getPartidos');

    // Cear un prode
    Route::post('/prode/nuevo', 'ProdeController@create');

    // Guardar un prode
    Route::post('/prode/save', 'ProdeController@save');

    // Eliminar un prode
    Route::post('/prode/delete', 'ProdeController@delete');

    // Todos los Prode del usuario autenticado.

    Route::get('/prode/user', 'ProdeController@getProdes');


});
