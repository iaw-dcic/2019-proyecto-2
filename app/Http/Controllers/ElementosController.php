<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stampa;
use App\Colour;

class ElementosController extends Controller{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    
    public function getColores(){
        $colores = Colour::get('url');
        $arreglo = [];
        foreach($colores as $color){
            $arreglo[] = ['url' => $color->url];
        }
        if ($arreglo != null)
            return response()->json($arreglo, 200);
        else
            return abort(404);
    }
    

    public function getStampas(){
        $stampas = Stampa::get('url');
        $arreglo = [];
        foreach($stampas as $stampa){
            $arreglo[] = ['url' => $stampa->url];
        }
        if ($arreglo != null)
            return response()->json($arreglo, 200);
        else
            return abort(404);
    }
}
