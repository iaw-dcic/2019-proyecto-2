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

/**
** Basic Routes for a RESTful service:
**
** Route::get($uri, $callback);
** Route::post($uri, $callback);
** Route::put($uri, $callback);
** Route::delete($uri, $callback);
**/

// API avatares
Route::middleware('auth:api')->get('/avatars','Api\AvatarController@index')
->name('get_avatars');
Route::middleware('auth:api')->post('/avatars','Api\AvatarController@store')
->name('post_avatars');
Route::middleware('auth:api')->get('/avatars/{id}','Api\AvatarController@show')
->name('show_avatar');
Route::middleware('auth:api')->patch('/avatars/{id}','Api\AvatarController@update')
->name('update_avatar');
Route::middleware('auth:api')->delete('/avatars/{id}','Api\AvatarController@destroy')
->name('delete_avatar');

// API recursos de avatares

// GET ALL items de avatares
Route::get('/resources','Api\AvatarItemsController@index')->name('avataritems');

// GET ALL y GET 1 recursos
Route::get('/resources/body','Api\BodyItemController@index')->name('bodyitems');
Route::get('/resources/body/{id}','Api\BodyItemController@show')->name('bodyitem');

Route::get('/resources/head','Api\HeadItemController@index')->name('headitems');
Route::get('/resources/head/{id}','Api\HeadItemController@show')->name('headitem');

Route::get('/resources/upperbody','Api\UpperBodyItemController@index')->name('upperbodyitems');
Route::get('/resources/upperbody/{id}','Api\UpperBodyItemController@show')->name('upperbodyitem');

Route::get('/resources/lowerbody','Api\LowerBodyItemController@index')->name('lowerbodyitems');
Route::get('/resources/lowerbody/{id}','Api\LowerBodyItemController@show')->name('lowerbodyitem');

Route::get('/resources/extra','Api\ExtraItemController@index')->name('extraitems');
Route::get('/resources/extra/{id}','Api\ExtraItemController@show')->name('extraitem');
