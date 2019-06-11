<?php



Route::get('/index','TeamController@index')->name('indexTeam');


/**
 * Esta ruta de ejemplo lo que hace es devolvernos al usuario que actualmente esta
 * haciendo la peticion.
 * Vemos que tenemos el mismo middleware auth que tenemos para proteger las rutas
 * habitualmente, en este caso usamos el middleware auth con el parametro api(auth:api)
 */
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:api')->get('/vistaGuardar', 'ProdeController@vistaGuardar');

// Route::get('/{prode}', 'TeamController@show')->middleware('auth:api');


Route::resource('/prode', 'ProdeController')->middleware('auth:api');


Route::group( ['middleware' => 'auth:api' ], function(){


    // Route::resource('/Guardar', 'Api\EjemploController');

});
