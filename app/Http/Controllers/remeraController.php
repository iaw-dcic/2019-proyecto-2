<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class remeraController extends Controller
{

    //public getRemeras(){
        //aca tengo que devolver todas las remeras del usuario logeado.
    //}

    public function guardar(){
        $remera = Shirt::create([
            'user_id' => auth('api')->user()->id,
            'name'=> request('currentColour'),
            'stampa_id' => request('currentStampa'),
            'colour' => request()
        ]);

        return;
    }

    public function eliminar($id){

        $remera = Remera::findOrFail($id);
        if( auth('api')->user()->id == $remera->user_id ){
            $remera->delete();
            return response()->json(['result' => 'success']);
        }
        return response()->json(['result' => 'fail']);
    }
}
