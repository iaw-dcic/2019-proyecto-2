<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class remeraController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    
    public function getRemeras(){
        //aca tengo que devolver todas las remeras del usuario logeado.
        $user = auth('api')->user();

        $remeras = $user->misRemeras()->getResults();

        return response()->json(['remeras' => 'success']);
    }

    public function guardar(Request $request){

        $data = $request->all();

        $request->validate([
            'colour' => ['required', 'string', 'exists:colours', 'max:255'],
            'stampa' => ['nullable', 'string', 'exists:stampas', 'max:255'],
            'size' => ['nullable', 'string', 'exists:size', 'max:3'],
        ]);

        $nueva = new Remera;
        $nueva->stampa = $data['stampa'];
        $nueva->colour = $data['colour'];
        $nueva->size = $data['size'];
        $nueva->user_id = auth('api')->user()->id;

        $nueva->save();

        return response()->json([$request->all()]);
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
