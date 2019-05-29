<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TShirt;

class TShirtsController extends Controller{
    public function store(){
        $tshirt = TShirt::create([
            'user' => '',
			'color' => request('tshirt_color'),
			'image' => request('image'),
            'image_type' => request('image_type'),
			'tshirt_type' => request('tshirt_type'),
		]);
        return ;
    }
}
