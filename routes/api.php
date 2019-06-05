<?php
Route::post('register', 'AuthController@register');

Route::post('login', 'AuthController@login');

//Recuperar contraseña
Route::post('recover', 'AuthController@recover');


Route::get('/index','TeamController@index')->name('indexTeam');

/**
 * Rutas que estan dentro de un grupo, todas las rutas que estan aca adentro
 * tienen que pasar por la validacion jwt.auth
 * Esto valida que venga un token con la peticion
 * Si no viene un token el no lo deja entrar a la ruta
 */
Route::group(['middleware' => ['jwt.auth']], function() {

    Route::get('logout', 'AuthController@logout');


    Route::get('test', function(){
        return response()->json(['foo'=>'bar']);
    });

    //Me va a crear todas las rutas para el controlador ProdeController
    Route::resource('/prode', 'ProdeController');
});
