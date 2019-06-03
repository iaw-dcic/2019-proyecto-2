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
            'logo' => [ 'nullable', 'string', 'exists:logos', 'max:255'],
         ]);
        
        //Crear Remera
        $nuevaRemera = new Shirt;
        $nuevaRemera->color = $data['color'];
        $nuevaRemera->talle = $data['talle'];
        $nuevaRemera->tela = $data['tela'];
        $nuevaRemera->logo = $data['logo'];
        $nuevaRemera->user_id=auth('api')->user()->id;    

        $nuevaRemera->save();
          
        return response()->json([$request->all()]);
    }

    public function misDiseños()
    {
        $remeras = Shirt::where('user_id',1)->get();
        $arreglo = [];

        foreach($remeras as $remera){
            $arreglo[] = ['id' => $remera->id, 'color'=> $remera->color, 'logo'=> $remera->logo,'tela' => $remera->tela, 'talle' => $remera->talle];
        }

        if ($arreglo != null)
            return response()->json($arreglo, 200);
        else
            return abort(404);
    }

}
