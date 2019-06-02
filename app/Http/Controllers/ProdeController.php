<?php

namespace App\Http\Controllers;

use App\Partido;
use App\Prode;
use App\Team;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ProdeController extends Controller
{

    public function create(Request $request){

        $userId = auth()->id();

        $prode = new Prode();
        $prode->user_id = $userId;
        $prode->nombre = $request['nombre'];
        $prode->save();

        // Se recupera la plantilla del Torneo Base
        $prodeLibertarores = Prode::find('1');

        // Se recuperan los partidos del torneo
        $partidos = $prodeLibertarores->partidos()->get();

        // A cada partido se le asigna el nuevo prode_id
        foreach ($partidos as $partido ){

            $partido2 = new Partido();
            $partido2->prode_id = $prode->id;
            $partido2->nro_partido = $partido->nro_partido;
            $partido2->nro_partidoProximo = $partido->nro_partidoProximo;
            $partido2->nro_partidoEquipo1 = $partido->nro_partidoEquipo1;
            $partido2->nro_partidoEquipo2 = $partido->nro_partidoEquipo2;

            // Arreglar mas elegante
            if($partido->id_equipo1 == 0) // Fix Foreing Key Check - Team 17 tiene nombre vacio
                $partido2->id_equipo1 = 17;
            else
                $partido2->id_equipo1 = $partido->id_equipo1;

            if($partido->id_equipo2 == 0)
                $partido2->id_equipo2 = 17;
            else
                $partido2->id_equipo2 = $partido->id_equipo2;

            $partido2->prode_id = $prode->id;

            $partido2->save();
        }

        return $prode->id;
    }


    // Retorna todos los prodes que coincida con UserId
    public function getProdes(){

        $userId = auth()->id();

        $prodes = Prode::all()->where('user_id',$userId);

        //Se arma el array que se retornara al front
        $response=array();

        // Se recorren los partidos y se agregan los nombres de los Equipos.
        foreach ($prodes as $prode ){

            $fecha = $prode->created_at;

            if($fecha){
                $fecha = $fecha->format('d M Y');
            }

            $prodesJSON = array(
                "id"=> $prode->id,
                "nombre"=> $prode->nombre,
                "fechaCreacion" => $fecha
            );

            $response[] = $prodesJSON;
        }

        return json_encode($response);
    }

    public function getPartidos($id){

        // Se recupera el prode
        $prode = Prode::find($id);

        // Se recuperan los partidos del prode
        $partidos = $prode->partidos()->get();

        //Se arma el array que se retornara al front
        $response=array();

        // Se recorren los partidos y se agregan los nombres de los Equipos.
        foreach ($partidos as $partido ){

            if($partido->id_equipo1 != 0)
                $Equipo1 = Team::find($partido->id_equipo1)->nombre;
            else
                $Equipo1 = "";

            if($partido->id_equipo2 != 0)
                $Equipo2 = Team::find($partido->id_equipo2)->nombre;
            else
                $Equipo2 = "";

            $partidoJSON = array(
                "id" => $partido->id,
                "nro_partido"=> $partido->nro_partido,
                "nro_proximoPartido"=> $partido->nro_partidoProximo ,
                "nro_partidoEquipo1" => $partido->nro_partidoEquipo1,
                "nro_partidoEquipo2" => $partido->nro_partidoEquipo2,
                "equipo1" => "".$Equipo1,
                "equipo2" => "".$Equipo2
            );

            $response[] = $partidoJSON;

        }

        return json_encode($response);

    }

    public function save(Request $request){

        $llaves = $request->llaves;

        foreach($llaves as $partido){

            // Recupero informacion necesaria para hace rel save();
            $partidoNuevo = Partido::find($partido['id']);
            $id_equipo1 = Team::all()->where('nombre',$partido['equipo1'])->first();
            $id_equipo2 = Team::all()->where('nombre',$partido['equipo2'])->first();

            $partidoNuevo->id_equipo1 = $id_equipo1->id;
            $partidoNuevo->id_equipo2 = $id_equipo2->id;

            $partidoNuevo->save();

        }

    }

    public function delete(Request $request){



        $idProde = $request->id;

        // Se recupera el prode
        $prode = Prode::find($idProde);

        $userId = auth()->id();

        if($prode->user_id == $userId){
            // Se recuperan los partidos del prode
            $partidos = $prode->partidos()->get();

            // Se eliminan todos los partidos asociados al prode.
            foreach($partidos as $partido){

                $partido->delete();

            }

            $prode->delete();
        }
        else
            return "error";



    }



    }
