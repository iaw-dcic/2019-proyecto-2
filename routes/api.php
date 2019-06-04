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
Route::group(['middleware'=>'auth:api'], function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/prodes', 'ProdesController@prodeAll');
    Route::get('/prodes/{id}', 'ProdesController@prodeDetails');
    Route::get('/prodes/token', 'ProdesController@token');
    Route::get('/equipos', 'ProdesController@getEquipos');
    Route::post('/prodes/create', 'ProdesController@prodeCreate');
    //veo los cruces
    Route::post('/prodes/{id}/edit', 'ProdesController@prodeEdit');
    Route::put('/prodes/{id}','ProdesController@prodeUpdate');

    Route::delete('/prodes/{id}', 'ProdesController@prodeDelete');


    Route::post('/prodes/{id}', 'EliminatoriasController@create');
    Route::post('/eliminatoria', 'EliminatoriasController@update');


});





//cruce
//Route::middleware('auth:api')->get('/prodes/1','ProdesController@index');
//Route::middleware('auth:api')->get('/home','ProdesController@index');

//Route::get('/prodes/:id', 'ProdesController@index')->name('prodes.index');