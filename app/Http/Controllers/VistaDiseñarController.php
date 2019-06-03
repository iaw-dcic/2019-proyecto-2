<?php

namespace App\Http\Controllers;
use App\Colour;
use App\Tela;
use App\Talle;
use App\Logo;
use Illuminate\Http\Request;

class VistaDiseñarController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**View del Listado de Colores */
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

    /**View del Listado de talles */
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

    /**View del Listado de telas */
    public function listadoTelas()
    {
        $telas = Tela::get('tela');
        $arreglo = [];

        foreach($telas as $tela){
            $arreglo[] = ['nombre' => $tela->tela];
        }

        if ($arreglo != null)
            return response()->json($arreglo, 200);
        else
            return abort(404);
    }

    /**View del Listado de Logos */
    public function listadoLogos()
    {
        $logos = Logo::get('logo');
        $arreglo = [];

        foreach($logos as $logo){
            $arreglo[] = ['logo' => $logo->logo];
        }

        if ($arreglo != null)
            return response()->json($arreglo, 200);
        else
            return abort(404);
    }
}
