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
  
    //Burger routes
    Route::get('burgers', 'BurgerController@index');
    Route::post('burgers', 'BurgerController@store');
    Route::get('burgers/{id}', 'BurgerController@show');

    //Ingredients routes
    Route::get('ingredients', 'IngredientController@index');
    Route::post('ingredients', 'IngredientController@store');
});
