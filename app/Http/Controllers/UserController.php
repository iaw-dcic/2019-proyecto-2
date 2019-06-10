<?php

namespace App\Http\Controllers;

use App\User;
use App\Avatar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller{
    //
    public function __construct(){
        // $this->middleware('auth');
    }

    public function getAvatar(){
        // OLD
        // $avatar = Auth::user()->avatar; //json
        // // dd($avatar);
        // return ($avatar);

    }

    public function getAvatars(){
        $user = Auth::user();
        $avatars =  $user->avatars;
        // dd($avatars);
        // return ($avatars->toJson());
        return $avatars->toJson();

    }

    public function updateAvatar(Request $req){
        // dd($req);
        $user = Auth::user();
        $avatar_id = $req->input('avatar_id');
        if( $avatar_id == -1){
            // nuevo avatar
            $avatar = new Avatar();
            $avatar->features = json_encode($req->input('data'));
            $avatar->user_id = $user->id;
            $avatar->save();
        }
        else{
            $avatar = Avatar::find($avatar_id);
            $avatar->features = json_encode($req->input('data'));
            $avatar->user_id = $user->id;
            $avatar->save();
        }
        // return ($user->avatar);
    }
}
