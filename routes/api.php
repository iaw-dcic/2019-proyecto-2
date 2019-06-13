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

Route::resource('teams', 'TeamController')->middleware('auth:api');
Route::resource('prode', "ProdeController")->middleware('auth:api');
Route::get('alias', "TeamController@indexAlias")->middleware('auth:api');