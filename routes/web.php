<?php
//Verificacion de un codigo
Route::get('user/verify/{verification_code}', 'AuthController@verifyUser');
//Resetear el password
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.request');
//Recuperar la contraseña
Route::post('password/reset', 'Auth\ResetPasswordController@postReset')->name('password.reset');

Auth::routes();
// Route::get('', function ($id) {
// });


//
Route::view('/{path?}', 'react')->name('react');//->middleware('auth');
// Route::view('/prode', 'react');//->middleware('auth');
// Route::view('/prode/crear', 'react');//->middleware('auth');
// Route::view('/prode/modificar', 'react');//->middleware('auth');

// //no se si va
// Route::get('/home', 'HomeController@index')->name('home');

// Route::get('/',function () {
//     return view('welcome');
// });

// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
// Registration Routes...
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');
// Password Reset Routes...
Route::resetPassword();
// Email Verification Routes...
Route::emailVerification();
Route::get('/home', 'HomeController@index')->name('home');
