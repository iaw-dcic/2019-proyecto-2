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
Route::group(['middleware' => ['jwt.auth']], function () {
  
    // all routes to protected resources are registered here  
    Route::get('users/list', function(){
        $users = App\User::all();
        
        $response = ['success'=>true, 'data'=>$users];
        return response()->json($response, 201);
    });
});

Route::post('user/login', 'UserController@login');
    Route::post('user/register', 'UserController@register');
    Route::get('burgers', 'BurgerController@index');
    Route::post('burgers', 'BurgerController@store');
    Route::get('burgers/{id}', 'BurgerController@show');
    Route::get('ingredients', 'IngredientController@index');
    Route::get('ingredients/{id}', 'IngredientController@show');
    Route::post('ingredients', 'IngredientController@store');

/*Route::group(['middleware' => 'api-header'], function () {
  
    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('user/login', 'UserController@login');
    Route::post('user/register', 'UserController@register');
    Route::get('burgers', 'BurgerController@index');
    Route::post('burgers', 'BurgerController@store');
    Route::get('burgers/{id}', 'BurgerController@show');
    Route::get('ingredients', 'IngredientController@index');
    Route::get('ingredients/{id}', 'IngredientController@show');
    Route::post('ingredients', 'IngredientController@store');

});*/


/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


