<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Prode;
use App\Partido;
use App\Equipo;
use Auth;
use Illuminate\Support\Facades\DB;

class ProdeController extends Controller{

    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $user = auth('api')->user();
        $prodes = $user->getProdes()->get();
        $prodes_user = [];
        $partidos_prodes = [];
        $i = 0;
        foreach($prodes as $prode){
            $partidos = $prode->getPartidos()->get();
            foreach($partidos as $partido)
                $partido = $this->crearPartido($partido);
            array_push($partidos_prodes, $partidos);
            array_push($prodes_user, ['id' => $prode->id, 'partidos' => $partidos_prodes[$i++]]);
        }
        return Response()->json($prodes_user, 200);
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        DB::beginTransaction();
        try{
            $user = Auth()->user();
            $partidos = $request->partidos;

            $partidosDB = [];

            foreach($partidos as $partido){
                $partidoDB = Partido::find($partido['id']) ?: new Partido();
                $partidoDB->local_id = $partido['local']['local_id'];
                $partidoDB->visitante_id = $partido['visitante']['visitante_id'];
                $partidoDB->fase = $partido['fase'];
                $partidoDB->goles_local = $partido['resultado']['resultado_local'];
                $partidoDB->goles_visitante = $partido['resultado']['resultado_visitante'];
                $partidoDB->save();
                array_push($partidosDB, $partidoDB);
            }
            $prode = $user->getProdes()->find($request->id) ?: null;
            if($prode == null){
                $prode = new Prode();
                $prode->id = $request->id;
                $prode->save();
                $user->getProdes()->attach($prode->id);
            }

            foreach($partidosDB as $partidoDB){
                if($partidoDB->getProdes()->find($prode->id) == null)
                    $partidoDB->getProdes()->attach($prode->id);
                $partidoDB = $this->crearPartido($partidoDB);
            }
            DB::commit();
            return Response()->json(['id' => $prode->id, 'partidos' => $partidosDB], 200);
        }catch(\Exception $ex){
            DB::rollback();
            return Response()->json('500 Internal Server Error', 500);
        }
    }

    /**
     * Display the specified resource.
     * @param  \App\Prode  $prode
     * @return \Illuminate\Http\Response
     */
    public function show($prode_id){
        $user = Auth::user();
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
    public function destroy($prode_id){
        DB::beginTransaction();
        try{
            $user = Auth()->user();
            $prode = $user->getProdes()->find($prode_id);
            $partidos = $prode->getPartidos()->get();
            foreach($partidos as $partido)
                $partido->delete();
            $prode->delete();
            DB::commit();
            return Response()->json(['resultado' => true], 200);
        }catch(\Exception $ex){
            DB::rollback();
            return Response()->json(['resultado' => false], 400);
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

    public function getNewId(){
        $id = Prode::all()->count()*10+1;
        return Response()->json($id, 200);
    }
}
