<?php


Auth::routes();

Route::view('/guardar', 'react')->name('guardar')->middleware('auth');
Route::view('/{path?}', 'react')->name('react')->middleware('auth');

