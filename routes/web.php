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
Route::view('/mylab', 'index')->middleware('auth');
Route::view('/profile', 'index')->middleware('auth');
Route::view('/{path?}', 'index');