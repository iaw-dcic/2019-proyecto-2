<?php
Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::post('recover', 'AuthController@recover');

/**
 * Rutas que estan dentro de un grupo
 */
Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('logout', 'AuthController@logout');
    Route::get('test', function(){
        return response()->json(['foo'=>'bar']);
    });

    //Me va a crear todas las rutas para el controlador ProdeController
    Route::resource('/prode', 'ProdeController');
});
