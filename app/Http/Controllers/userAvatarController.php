<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\avatar;

class userAvatarController extends Controller
{
    public function __construct(){
        $this->middleware('auth:api');
    }

    public function index(){

    }

    public function store(Request $request){
        return response()->json('Avatar guardado!');
    }

    public function show($id){

    }

    public function edit(){

    }

    public function update(avatar $avatar){

    }
}
