<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EliminatoriasController extends Controller
{
      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function update()
    {
       $eliminatoria= Encuentro::all();
      return response()->json($eliminatoria);
    }



    public function create(Request $request)
    {
      dd($request);

      /*$encuentro= new Encuentro();
      $encuentro->prode_id= $prode->id;
      $encuentro->cruce_id= $cruce->id;
      $encuentro->nombre_A= $ci->nombre_A;
      $encuentro->nombre_B= $ci->nombre_B;
      $encuentro->bandera_A= $ci->bandera_A;
      $encuentro->bandera_B= $ci->bandera_B;
      $encuentro->resultado_A= 0;
      $encuentro->resultado_B= 0;
      $encuentro->pasa= 1;
      $encuentro->save();
      */
    }
}
