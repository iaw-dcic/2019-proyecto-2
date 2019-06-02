<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Seleccion;

class SeleccionesController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth:api');
    }

    public function getSelecciones(){

        $selecciones = Seleccion::all();
        $arreglo=array();
        $i=0;
        foreach($selecciones as $seleccion){
            $arreglo["items"][$i++]=array(
                'codigo' => $seleccion->codigo,
                'name' => $seleccion->name
            );
        }

        if($selecciones != null){
            return response()->json($arreglo, 200);
        }else{
            return abort(404);
        }
    }
}
