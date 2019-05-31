<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\avatar;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class userAvatarController extends Controller
{
    public function __construct(){
        $this->middleware('auth:api', ['except' => ['getUserApiToken']]);
    }

    public function index(){
        $Avatares = User::findOrFail(Auth::user()->id)->avatars;
        return $avatares->toJson();
    }

    public function store(Request $request){
        $validatedData = $request->validate([
            'name' => 'required',
            'face' => 'required',
            'hair' => 'required',
            'eyes' => 'required',
            'mouth' => 'required',
          ]);

          $avatar = avatar::create([
            'name' => $validatedData['name'],
            'face' => $validatedData['face'],
            'eyes' => $validatedData['eyes'],
            'hair' => $validatedData['hair'],
            'mouth' => $validatedData['mouth'],
          ]);

        return response()->json('Avatar guardado!');
    }

    public function show($id){

    }


    public function update(avatar $avatar){

    }

    public function getUserID(){
        $ID = Auth::user()->id;
        return $ID->toJson(); 
    }

    public function getUserApiToken(){
        $user = User::find(1);
        $token = $user->api_token;
        return $token;
    }
}
