<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Colour;

class ColourController extends Controller
{
   
    public function listadoColores()
    {
        $colores = Colour::get('color');
        $arreglo = [];

        foreach( $colores as $color){
            $arreglo[] = ['color' => $color->color];
        }

        if ($arreglo != null)
            return response()->json($arreglo, 200);
        else
            return abort(404);  
    }
}
