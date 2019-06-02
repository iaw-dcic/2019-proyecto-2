<?php

namespace App\Http\Controllers;

use App\Prode;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Partido;
use App\Equipo;
use App\User;

class ProdeController extends Controller{

    public function __construct(){
        //$this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index($user_id){
        /*
        if(Auth::user()->id != $user_id)
            return Response()->json(['error' => '401 Unauthorized'], 401);
        $user = Auth::user();
        */

        $user = User::find($user_id);   //Borrar y reemplazar por el comentario de arriba
        $prodes = $user->getProdes()->get();
        $prodes_user = [];
        $partidos_prodes = [];
        foreach($prodes as $prode){
            $partidos = $prode->getPartidos()->get();
            foreach($partidos as $partido)
                $partido = $this->crearPartido($partido);
            array_push($partidos_prodes, $partidos);
            array_push($prodes_user, ['id' => $prode->id, 'partidos' => $partidos_prodes[0]]);
        }
        return Response()->json($prodes_user, 200);
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $user_id){
        return $request;
    }

    /**
     * Display the specified resource.
     * @param  \App\Prode  $prode
     * @return \Illuminate\Http\Response
     */
    public function show($user_id, $prode_id){
        /*
        if(Auth::user()->id != $user_id)
            return Response()->json(['error' => '401 Unauthorized'], 401);
        $user = Auth::user();
        */

        $user = User::find($user_id);   //Borrar y reemplazar por el comentario de arriba
        $prode = $user->getProdes()->find($prode_id);
        $partidos_prode = [];
        $partidos = $prode->getPartidos()->get();
        foreach($partidos as $partido)
            $partido = $this->crearPartido($partido);
        array_push($partidos_prode, [$prode->id => $partidos]);
        return Response()->json($partidos_prode[0], 200);
    }

    /**
     * Update the specified resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Prode  $prode
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $user_id, $prode_id){
        return $request;
    }

    /**
     * Remove the specified resource from storage.
     * @param  \App\Prode  $prode
     * @return \Illuminate\Http\Response
     */
    public function destroy($user_id, $prode_id){
        /*
        if(Auth::user()->id != $user_id)
            return Response()->json(['error' => '401 Unauthorized'], 401);
        $user = Auth::user();
        */
        try{
            $user = User::find($user_id);   //Borrar y reemplazar por el comentario de arriba
            $prode = $user->getProdes()->find($prode_id);
            $prode->destroy();
            return Response()->json(['ok' => 'Eliminado']);
        }catch(\Exception $ex){
            return Response()->json(['error' => 'Error al eliminar el prode']);
        }
    }

    private function crearPartido($partido){
        $local_id = $partido->local_id;
        $visitante_id = $partido->visitante_id;
        $partido->local = Equipo::find($local_id);
        $partido->visitante = Equipo::find($visitante_id);
        if($partido->ganador == "local")
            $partido->ganador = $partido->local->id;
        else if($partido->ganador == "visitante")
            $partido->ganador = $partido->visitante->id;
        else if(!$partido->ganador == "empate")
            $partido->ganador = null;
        array_pull($partido, 'local_id');
        array_pull($partido, 'visitante_id');
        array_pull($partido, 'pivot');
        return $partido;
    }
}
