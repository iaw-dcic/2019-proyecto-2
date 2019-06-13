<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Shirt;

class RemeraController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getRemeras()
    {
        //aca tengo que devolver todas las remeras del usuario logeado.
        $user = auth('api')->user();

        $remeras = Shirt::where('user_id', $user->id)->get();

        return response()->json($remeras, 200); 
    }

    public function guardar(Request $request)
    {

        $data = $request->all();

        $request->validate([
            'colour' => ['required', 'string', 'exists:colours', 'max:255'],
            'stampa' => ['nullable', 'string', 'exists:stampas', 'max:255'],
            'size' => ['nullable', 'string', 'exists:sizes', 'max:255'],
        ]);

        $nueva = new Shirt;
        $nueva->stampa = $data['stampa'];
        $nueva->colour = $data['colour'];
        $nueva->size = $data['size'];
        $nueva->user_id = auth('api')->user()->id;

        $nueva->save();

        return response()->json([$request->all()]);
    }

    public function eliminar($id)
    {

        $remera = Shirt::findOrFail($id);
        if (auth('api')->user()->id == $remera->user_id) {
            $remera->delete();
            return response()->json(['result' => 'success']);
        }
        return response()->json(['result' => 'fail']);
    }
}