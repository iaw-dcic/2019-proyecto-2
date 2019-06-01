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
Route::post('/{id}/avatars', 'userAvatarController@index');
Route::post('/{id}/avatars/{avatarId}','userAvatarController@show');
Route::post('/{id}/avatars', 'userAvatarController@store');
Route::post('/{id}/avatars/{avatarId}', 'userAvatarController@update');
Route::post('/user' ,'userAvatarController@getUserID');
Route::get('/recursos/{recurso}','userAvatarController@getResources');

