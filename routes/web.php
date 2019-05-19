<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();
Route::get('/equipos', 'EquipoController@index')->name('index');
Route::view('/{path?}', 'react');//->middleware('auth');

// //Generales
// Route::get('/', 'PageController@inicio')->name('index');
// Route::get('/users', 'PageController@search')->name('search-profile');  
// Route::get('/home', 'HomeController@index')->name('home');
// //Perfiles
// Route::post('/profiles', 'ProfileController@store');
// Route::get('/profiles/{id}', 'ProfileController@index');
// Route::get('/profile/edit', 'ProfileController@editProfile')->name('edit-profile')->middleware('auth');
// //Lista libro
// Route::post('/lista-libros/create', 'ListaLibroController@store')->name('crearListaLibros')->middleware('auth');
// Route::get('/lista-libros', 'ListaLibroController@index')->name('listaLibros')->middleware('auth');
// Route::get('/lista-libros/{id}', 'LibroController@create')->name('add-libro')->middleware('auth');
// Route::delete('/lista-libros', 'ListaLibroController@destroy')->name('delete-lista-libros')->middleware('auth');
// Route::post('/toggle-list', 'ListaLibroController@toggleList')->name('toggle-list')->middleware('auth');
// //Libro
// Route::post('/lista-libros/{id}/add', 'LibroController@store')->name('store-libro')->middleware('auth'); 
// Route::delete('/libro','LibroController@destroy')->name('delete-libro')->middleware('auth');
// Route::post('/edit-libro', 'LibroController@edit')->name('edit-libro')->middleware('auth');
// //facebook
// Route::get('/login/facebook')->name('login-facebook');
// Route::get('login/facebook', 'Auth\LoginController@redirectToProvider');
// Route::get('login/facebook/callback', 'Auth\LoginController@handleProviderCallback');

//redireccionar invalidos 
Route::any('{query}', 
  function() { return redirect('/'); })
  ->where('query', '.*');