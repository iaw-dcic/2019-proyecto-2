<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Shirt;

class RemeraController extends Controller
{
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
        $nuevaRemera->user_id= 1;

        $nuevaRemera->save();
          
        return response()->json([$request->all()]);
    }



}
