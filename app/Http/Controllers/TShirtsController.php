<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TShirt;
use App\User;
use Auth;

class TShirtsController extends Controller{
    public function index(){
        return auth('api')->user()->tshirts;
    }

    public function store(){
        $tshirt = TShirt::create([
            'user_id' => auth('api')->user()->id,
            'color' => request('tshirt_color'),
            'image' => request('image'),
            'image_type' => request('image_type'),
            'tshirt_type' => request('tshirt_type'),
        ]);
        return;
    }
}
