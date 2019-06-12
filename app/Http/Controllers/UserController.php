<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class UserController extends Controller
{
    //
    public function profile(){
    	return view('perfil', array('user'=> Auth::user()));
    }

    public function get_id(){
        return $this->id;
    }

    public function update_profile(Request $request){
    	$user=Auth::user();
             
         $name = $request->input('name');
         
        
        if(!is_null($name)){
            $user->name=$name;
        }
        
        $user->save();
        
        return view('perfil', array('user'=> Auth::user()));

    }
}