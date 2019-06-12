<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\modelo;

class modeloController extends Controller
{
    //
    public function index(){
       $m=modelo::all();
       return response()->json($m);
   }
}
