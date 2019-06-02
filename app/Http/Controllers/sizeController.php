<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\size;

class sizeController extends Controller
{
    //
    public function index(){
       $s=size::all();
       return response()->json($s);
   }
}
