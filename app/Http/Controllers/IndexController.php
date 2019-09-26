<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use JWTFactory;
use JWTAuth;
use App\User;

class IndexController extends Controller{
    
    public function index(Request $request){
        return view('react');
    }
}
