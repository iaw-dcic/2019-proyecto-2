<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;

class IndexController extends Controller{
    
    public function index(){
        $user = Auth::user();
        return view('react')->with('user', $user);
    }
}
