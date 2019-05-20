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


Route::get('burgers', 'BurgerController@index');
Route::post('burgers', 'BurgerController@store');
Route::get('burgers/{id}', 'BurgerController@show');
Route::get('ingredients', 'IngredientController@index');
Route::get('ingredients/{id}', 'IngredientController@show');
