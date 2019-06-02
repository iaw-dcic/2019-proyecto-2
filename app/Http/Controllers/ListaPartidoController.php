<?php

namespace App\Http\Controllers;

use App\ListaPartido;
use App\Partido;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ListaPartidoController extends Controller
{

    // public function getInicialPartidos(){
    //     return ListaPartido::all()->find(1)->partidos()->get();
    // }

    public function getAllPartidos()
    {
        if(!Auth::check()){
            return [];
        }
        $user_id = Auth::user()->id;
        return User::all()->find($user_id)->listaPartidos()->get();
    }

    public function getLista($id)
    {
        return ListaPartido::all()->find($id)->partidos()->get();
    }

    public function store(Request $request)
    {
        $listaPartido = new ListaPartido;
        $listaPartido -> user_id = Auth::user()->id;
        $listaPartido -> save();
        foreach ($request->all() as $partido) {
            $nuevoPartido = new Partido;
            $nuevoPartido-> lista_partido_id = $listaPartido->id;
            $nuevoPartido-> etapa = $partido["etapa"];
            $nuevoPartido-> equipo1 = $partido["equipo1"];
            $nuevoPartido-> equipo2 = $partido["equipo2"];
            $nuevoPartido-> boton1 = $partido["boton1"];
            $nuevoPartido-> boton2 = $partido["boton2"];
            $nuevoPartido-> resultado1 = $partido["resultado1"];
            $nuevoPartido-> resultado2 = $partido["resultado2"];
            $nuevoPartido-> numero_partido = $partido["numero_partido"];
            $nuevoPartido-> save();
        }  
        return $request->all();
    }

    public function update(Request $request)
    {
        $idPartido = $request["idPartido"];
        $partidos = $request["partidos"];
        $partidosActualizar = ListaPartido::all()->find($idPartido)->partidos()->get();
        if(Auth::user() === ListaPartido::all()->find($idPartido)->user()->get()){  //por si algun ser del mal me cambia el state e intenta modificar algo que no es suyo :)
            foreach ($partidosActualizar as $partido) {
                $id = $partido->numero_partido;
                $partido-> etapa = $partidos[$id]["etapa"];
                $partido-> equipo1 = $partidos[$id]["equipo1"];
                $partido-> equipo2 = $partidos[$id]["equipo2"];
                $partido-> boton1 = $partidos[$id]["boton1"];
                $partido-> boton2 = $partidos[$id]["boton2"];
                $partido-> resultado1 = $partidos[$id]["resultado1"];
                $partido-> resultado2 = $partidos[$id]["resultado2"];
                $partido-> save();
            }
        }     
        return $partidosActualizar;
    }
}
