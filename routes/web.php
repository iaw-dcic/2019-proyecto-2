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
Route::view('/', 'react')->middleware('auth');
Route::view('/home', 'react')->middleware('auth');
Route::get('/readme', function () {
    return view('readme');
})->middleware('auth');