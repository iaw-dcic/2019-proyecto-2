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

    public function store(Request $request)
    {
        $data = $request->all();

        $request->validate([
            'tela' => ['required', 'string', 'exists:telas', 'max:255'],
            'talle' => ['required', 'string', 'exists:talles', 'max:255'],
            'color' => ['required', 'string', 'exists:colours', 'max:255'],
            'logo' => ['nullable', 'string', 'exists:logos', 'max:255'],
        ]);

        //Crear Remera
        $nuevaRemera = new Shirt;
        $nuevaRemera->color = $data['color'];
        $nuevaRemera->talle = $data['talle'];
        $nuevaRemera->tela = $data['tela'];
        $nuevaRemera->logo = $data['logo'];
        $nuevaRemera->user_id = auth('api')->user()->id;

        $nuevaRemera->save();

        return response()->json([$request->all()]);
    }

    public function misDiseños()
    {
        $userId = auth('api')->user()->id;
        $remeras = Shirt::where('user_id', $userId)->get();
        $arreglo = [];

        foreach ($remeras as $remera) {
            $arreglo[] = ['id' => $remera->id, 'color' => $remera->color, 'logo' => $remera->logo, 'tela' => $remera->tela, 'talle' => $remera->talle];
        }
        return response()->json($arreglo, 200);
    }

    public function delete($id)
    {
        $userId = auth('api')->user()->id;
        $remera = Shirt::where('user_id', $userId)->where('id', $id)->get()->first();
        if ($remera == null) {
            abort(403, 'No esta autorizado');
        }

        $remera->delete();
        return response()->json('OK', 200);
    }


    public function getRemera($id){

        $userId = auth('api')->user()->id;
        $remera = Shirt::where('user_id', $userId)->where('id', $id)->get()->first();
        if ($remera == null) {
            abort(403, 'No esta autorizado');
        }
        return response()->json($remera, 200);
    }

    public function update(Request $request, $id)
    {
        
        $userId = auth('api')->user()->id;
        $remera = Shirt::where('user_id', $userId)->where('id', $id)->get()->first();
        if ($remera == null) {
            abort(403, 'No esta autorizado');
        }

        $data = $request->all();
        $request->validate([
            'tela' => ['required', 'string', 'exists:telas', 'max:255'],
            'talle' => ['required', 'string', 'exists:talles', 'max:255'],
            'color' => ['required', 'string', 'exists:colours', 'max:255'],
            'logo' => ['nullable', 'string', 'exists:logos', 'max:255'],
        ]);

        /**Si existe algun campo distinto actualizarlo */
        //Si se cambio la tela
        if (strcmp($data['tela'], $remera->tela) != 0)
            $remera->update(['tela' => $data['tela']]);
        //Si se cambio el talle
        if (strcmp($data['talle'], $remera->talle) != 0)
            $remera->update(['talle' => $data['talle']]);

        //Si se cambio el color
        if (strcmp($data['color'], $remera->color) != 0)
            $remera->update(['color' => $data['color']]);

        //Si se cambio el logo
        if (strcmp($data['logo'], $remera->logo) != 0)
            $remera->update(['logo' => $data['logo']]);
       
        return response()->json('OK', 200);
    }
}
