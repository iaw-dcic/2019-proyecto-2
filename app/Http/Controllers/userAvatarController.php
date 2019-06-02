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
        $Avatares = DB::table('avatars')->where('owner', auth('api')->user()->id)->get();
        return response()->json($Avatares[0]);
    }

    public function store(Request $request){
        $validatedData = $request->validate([
            'name' => 'required',
            'skin' => 'required',
            'hair' => 'required',
            'eyes' => 'required',
            'mouth' => 'required',
          ]);
        $avatar = avatar::find($request->avatarID);
        
        if($avatar == null){
          $avatar = avatar::create([
            'name' => $validatedData['name'],
            'skin' => $validatedData['skin'],
            'eyes' => $validatedData['eyes'],
            'hair' => $validatedData['hair'],
            'mouth' => $validatedData['mouth'],
            'owner' => auth('api')->user()->id
          ]);

        return response()->json($avatar->id);
        }
        else{
            $this->update($avatar);
        }
    }

    public function show($id){
        $avatar = avatar::findOrFail($id);
    }


    public function update(avatar $avatar){
        $validatedData = $request->validate([
            'skin' => 'required',
            'hair' => 'required',
            'eyes' => 'required',
            'mouth' => 'required',
        ]);
        $avatar->update();
        return response()->toJson('avatar actualizado!');
    }

    public function getUserID(Request $request){
        
        $user = auth('api')->user();
        $ID = $user->id;
        return $ID; 
    }

    public function getResources(){
        $recursos = DB::table('attires')->where('type',"skin")->get();
        return $recursos->toJson();
    }

}
