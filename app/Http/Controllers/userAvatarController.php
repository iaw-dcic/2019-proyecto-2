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
        $this->middleware('auth:api');
    }

    public function index(){
        $Avatares = User::findOrFail(Auth::user()->id)->avatars;
        dd($Avatares);
        return $Avatares->toJson();
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

    public function getUserID(Request $request){
        
        $user = Auth::guard('api')->user();
        dd($user);
        $ID = $user->id;
        //$ID = Auth::guard('api')->user();
        return $ID; 
    }

    public function getResources(String $type){
        dd($type);
        $recursos = DB::table('attires')->where('type',$type)->get();
        return $recursos->toJson();
    }

}
