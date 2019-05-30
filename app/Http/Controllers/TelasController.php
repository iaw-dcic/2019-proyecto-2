<?php

namespace App\Http\Controllers;

use App\Tela;

class TelasController extends Controller
{
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
}
