<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\User;
use App\Pronostico;

class PronosticoController extends Controller
{
    public function crearPronostico(){

        //creo una nueva instancia de pronostico y llamo una funcion que lo creer e inserte los partidos junto con los cuartos.
        //despues armo el json que contenga el id y lo retorno, asi uso el id para obtener todo lo que necesito.
      //$auth_id = Auth::id();
      $prono = Pronostico::create([
            'user_id' => 1
            ]);
      $prono -> inicializarCuartos();
      $arregloProno = Pronostico::all();
      $pronosticos = array();
      $i=0;
      foreach($arregloProno as $pronostico){
        $pronosticos["item"][$i++]=array(
            'id' => $pronostico->id
        );
      }

      return response()->json($pronosticos, 200);
    }

    public function getPronosticos(){
        $arregloProno = Pronostico::all();
      $pronosticos = array();
      $i=0;
      foreach($arregloProno as $pronostico){
        $pronosticos["item"][$i++]=array(
            'id' => $pronostico->id
        );
      }

      return response()->json($pronosticos, 200);
    }
}
