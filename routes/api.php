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

Route::get('/app/avatars', 'AvatarsController@index')->middleware('auth:api');

Route::post('/app/avatars', 'AvatarsController@store')->middleware('auth:api');

Route::put('/app/avatars/{avatar}', 'AvatarsController@update')->middleware('auth:api');

Route::get('/app/loadhair', 'ExternalSqlController@indexHair')->middleware('auth:api');

Route::get('/app/loadshirt', 'ExternalSqlController@indexShirt')->middleware('auth:api');

Route::get('/app/loadbeard', 'ExternalSqlController@indexBeard')->middleware('auth:api');