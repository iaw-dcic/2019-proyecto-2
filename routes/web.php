<?php


Auth::routes();
// Route::get('', function ($id) {
// });


//
Route::view('/guardar', 'react')->name('guardar')->middleware('auth');
Route::view('/{path?}', 'react')->name('react');//->middleware('auth');

