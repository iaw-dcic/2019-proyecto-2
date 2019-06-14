<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stampa;
use App\Colour;
use App\Size;

class ElementosController extends Controller{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    
    public function getColores(){
        $colores = Colour::get('colour');
        $arreglo = [];
        foreach($colores as $color){
            $arreglo[] = ['colour' => $color->colour];
        }
        if ($arreglo != null)
            return response()->json($arreglo, 200);
        else
            return abort(404);
    }
    

    public function getStampas(){
        $stampas = Stampa::get('stampa');
        $arreglo = [];
        foreach($stampas as $stampa){
            $arreglo[] = ['stampa' => $stampa->stampa];
        }
        if ($arreglo != null)
            return response()->json($arreglo, 200);
        else
            return abort(404);
    }

    public function getTalles(){
        $talles = Size::get('size');
        $arreglo = [];
        foreach($talles as $talle){
            $arreglo[] = ['size' => $talle->size];
        }

        if($arreglo!=null)
            return response()->json($arreglo,200);
        else   
            return abort(404);
    }

}
