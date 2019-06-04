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

Route::get('octavos', 'ProdeController@index')->middleware('auth:api');
Route::get('prode', 'ProdeController@prode')->middleware('auth:api');
Route::get('prode/{id}', 'ProdeController@prodeid')->middleware('auth:api');
Route::post('prode', 'ProdeController@store')->middleware('auth:api');
Route::put('prode', 'ProdeController@update')->middleware('auth:api');
Route::delete('prode/{id}', 'ProdeController@delete')->middleware('auth:api');
