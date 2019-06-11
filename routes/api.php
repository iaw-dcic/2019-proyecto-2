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

Route::get('products','ProductsController@index')->middleware('auth:api');

Route::post('products','ProductsController@store')->middleware('auth:api');

Route::get('product/getfunda/{id_case}','ProductsController@getFunda');

Route::get('product/{id_case}','ProductsController@show')->middleware('auth:api');

Route::put('product/{id_case}','ProductsController@update')->middleware('auth:api');

Route::get('colors', 'ColorsController@index');

Route::get('images', 'ImagesController@index');

Route::get('image/{id_image}','ImagesController@show');

Route::get('fundas', 'FundasController@index');

Route::get('colorcase/{id_case}/{id_color}', 'ColorCasesController@show');