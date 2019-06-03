<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;

class ImagesController extends Controller{
    public function index(){
        return Image::get(['src']);
    }
}
