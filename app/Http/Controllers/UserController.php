<?php

namespace App\Http\Controllers;

use App\User;
use App\Avatar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller{
    //
    public function __construct(){
        $this->middleware('auth');
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
        $avatars = $avatars->sortBy('id');
        // dd($avatars);
        // return ($avatars->toJson());
        return $avatars->values()->toJson();

    }


    public function storeAvatar(Request $req){
        // dd($req);
        $user = Auth::user();
        $avatar = new Avatar();
        $avatar->features = ($req->input('data'));
        $avatar->user_id = $user->id;
        $avatar->save();
        // return ($user->avatar);
    }

    public function updateAvatar(Request $req, Avatar $avatar){
        // dd($req);
        $user = Auth::user();
        // $avatar_id = $req->input('avatar_id');
        if($avatar->user_id ==  $user->id){
            $avatar->features = ($req->input('data'));
            $avatar->save();
        }
        else{
            abort(401);
        }
    }

    public function destroyAvatar(Request $req, Avatar $avatar){
        // dd($req);
        $user = Auth::user();
        // $avatar_id = $req->input('avatar_id');
        if($avatar->user_id ==  $user->id){
            $avatar->delete();
        }
        else{
            abort(401);
        }
    }


}
