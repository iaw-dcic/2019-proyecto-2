<?php
use Illuminate\Http\Response;

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
//Route::view('/{path?}', 'react');//->middleware('auth');

Route::get('/', function(){
    $competition =Football::getLeague('2001');
    $teams = Football::getLeagueTeams('2001');
    $matches = Football::getLeagueMatches('2001');

});
