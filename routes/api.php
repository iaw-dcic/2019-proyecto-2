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


// GET ALL y GET 1 recursos
Route::get('/resources/body','BodyItemController@index')->name('bodyitems');
Route::get('/resources/body/{id}','BodyItemController@show')->name('bodyitem');

Route::get('/resources/head','HeadItemController@index')->name('headitems');
Route::get('/resources/head/{id}','HeadItemController@show')->name('headitem');

Route::get('/resources/upperbody','UpperBodyItemController@index')->name('upperbodyitems');
Route::get('/resources/upperbody/{id}','UpperBodyItemController@show')->name('upperbodyitem');

Route::get('/resources/lowerbody','LowerBodyItemController@index')->name('lowerbodyitems');
Route::get('/resources/lowerbody/{id}','LowerBodyItemController@show')->name('lowerbodyitem');

Route::get('/resources/extra','ExtraItemController@index')->name('extraitems');
Route::get('/resources/extra/{id}','ExtraItemController@show')->name('extraitem');
