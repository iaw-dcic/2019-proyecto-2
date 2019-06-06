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

Route::get('donuts', 'DonutController@index');
Route::post('donuts', 'DonutController@store')->middleware('auth:api');
Route::get('donuts/{id}', 'DonutController@show')->middleware('auth:api');
Route::put('donuts/{id}', 'DonutController@update')->middleware('auth:api');
Route::delete('donuts/{id}', 'DonutController@delete')->middleware('auth:api');

Route::get('sabores', 'SaborController@index');
Route::get('glaseados', 'GlaseadoController@index');
Route::get('decoraciones', 'DecoracionController@index');


// Auth::guard('api')->user(); // instance of the logged user
// Auth::guard('api')->check(); // if a user is authenticated
// Auth::guard('api')->id(); // the id of the authenticated user

// Route::post('register', 'Auth\RegisterController@register');
// Route::post('login', 'Auth\LoginController@login');
// Route::post('logout', 'Auth\LoginController@logout');
