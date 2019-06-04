<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller{
    //
    public function __construct(){
        $this->middleware('auth');
    }

    public function getAvatar(){
        $avatar = Auth::user()->avatar; //json
        // dd($avatar);
        return ($avatar);

    }

    public function updateAvatar(Request $req){
        // dd($req);
        $user = Auth::user();
        $user->avatar = json_encode($req->input('data'));
        $user->save();
        // return ($user->avatar);
    }
}
