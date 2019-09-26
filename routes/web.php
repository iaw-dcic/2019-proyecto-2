<?php

use App\Prode;

Auth::routes();
Route::get('/home', 'IndexController@index')->name('home')->middleware('auth');
Route::get('/', 'IndexController@index')->name('index')->middleware('guest');
