<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\color;

class colorController extends Controller
{
    //
    public function index(){
       $c=color::all();
       return response()->json($c);
   }
}
