<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Talle;

class TallesController extends Controller
{
    public function listadoTalles()
    {
        $talles = Talle::get('talle');
        $arreglo = [];

        foreach( $talles as $talle){
            $arreglo[] = ['tipo' => $talle->talle];
        }

        if ($arreglo != null)
            return response()->json($arreglo, 200);
        else
            return abort(404);
    }
}
