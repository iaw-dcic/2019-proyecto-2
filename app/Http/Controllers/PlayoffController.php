<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Team;
use App\Octavo;
use App\Cuarto;
use App\Semifinal;
use App\Objfinal;
use App\Playoff;
use App\User;
use Response;
use DB;


class PlayoffController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }
    
    public function teams() {
        
        $teams = Team::all();
        $arr = [];
        foreach ($teams as $team) {
            $arr[] = ['name' => $team->name];
        }
        return Response::json($arr);
    }
   
    public function playoffs()
    {
        $arr = [];
        $playoffs = User::where('id',1)->first()->playoffs()->getResults();
        foreach ($playoffs as $playoff) {
            $playoffArr = ['id' => $playoff->id, 
                           'name' => $playoff->name,
                           'ganador' => $playoff->ganador,  
                           ];
            $id_octavos = $playoff->octavos_id;
            $octavo = Octavo::where('id',$id_octavos)->first();
           
            $id_cuartos = $octavo->cuartos_id;
            $cuarto = Cuarto::where('id',$id_cuartos)->first();
            
            $id_semifinal = $cuarto->semifinal_id;
            $semifinal = Semifinal::where('id',$id_semifinal)->first();

            $id_final = $semifinal->final_id;
            $final = Objfinal::where('id',$id_final)->first();

            array_push($playoffArr,$octavo);
            array_push($playoffArr,$cuarto);
            array_push($playoffArr,$semifinal);
            array_push($playoffArr,$final);
            array_push($arr, $playoffArr);
        }

        return Response::json($arr);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'teams' => ['required', 'array', 'size:16'],
            'teams.*' => ['required', 'array', 'size:1'],
            'teams.*.*' => ['required', 'string', 'max:255'],
            'cuartos' => ['required', 'array', 'size:8'],
            'cuartos.*' => ['required', 'string', 'max:255'],
            'semifinal' => ['required', 'array', 'size:4'],
            'semifinal.*' => ['required', 'string', 'max:255'],
            'final' => ['required', 'array', 'size:2'],
            'final.*' => ['required', 'string', 'max:255'],
            'ganador' => ['required', 'string', 'max:255'],
        ]);

        $data = $request->all();
        $teams = $data['teams']; 
        $cuartos = $data['cuartos'];
        $semifinals = $data['semifinal'];
        $finals = $data['final'];
        $ganador= $data['ganador'];
        
        try {
            DB::beginTransaction();
            $final = Objfinal::create([
                'teamname1' => $finals[0],
                'teamname2' => $finals[1],
            ]);

            $semifinal = Semifinal::create([
                'final_id' => $final['id'],
                'teamname1' => $semifinals[0],
                'teamname2' => $semifinals[1],
                'teamname3' => $semifinals[2],
                'teamname4' => $semifinals[3],
            ]);

            $cuarto = Cuarto::create([
                'semifinal_id' => $semifinal['id'],
                'teamname1' => $cuartos[0],
                'teamname2' => $cuartos[1],
                'teamname3' => $cuartos[2],
                'teamname4' => $cuartos[3],
                'teamname5' => $cuartos[4],
                'teamname6' => $cuartos[5],
                'teamname7' => $cuartos[6],
                'teamname8' => $cuartos[7],
            ]);

            $octavo = Octavo::create([
                'cuartos_id' => $cuarto['id'],
                'teamname1' => $teams[0]['name'],
                'teamname2' => $teams[1]['name'],
                'teamname3' => $teams[2]['name'],
                'teamname4' => $teams[3]['name'],
                'teamname5' => $teams[4]['name'],
                'teamname6' => $teams[5]['name'],
                'teamname7' => $teams[6]['name'],
                'teamname8' => $teams[7]['name'],
                'teamname9' => $teams[8]['name'],
                'teamname10' => $teams[9]['name'],
                'teamname11' => $teams[10]['name'],
                'teamname12' => $teams[11]['name'],
                'teamname13' => $teams[12]['name'],
                'teamname14' => $teams[13]['name'],
                'teamname15' => $teams[14]['name'],
                'teamname16' => $teams[15]['name'],
            ]);
        
            Playoff::create([
                'user_id' => 1, 
                'name' => 'nombrePlayoff',
                'octavos_id' => $octavo['id'],
                'ganador' => $ganador,
            ]);

            DB::commit();

            return response()->json([$data]);
        } catch (\Exception $e) {
            DB::rollback();
            abort(500);
        }
    }

    public function delete($id)
    {
        try {
            DB::beginTransaction();
            $playoff = Playoff::where('id',$id)->first();
            
            $id_octavos = $playoff->octavos_id;
            $octavo = Octavo::where('id',1)->first();
           
            $id_cuartos = $octavo->cuartos_id;
            $cuarto = Cuarto::where('id',1)->first();
            
            $id_semifinal = $cuarto->semifinal_id;
            $semifinal = Semifinal::where('id',1)->first();

            $id_final = $semifinal->final_id;
            $final = Objfinal::where('id',1)->first();
            
            $final->delete();
            $semifinal->delete();
            $cuarto->delete();
            $octavo->delete();
            $playoff->delete();

            DB::commit();
            return response()->json($id);
        } catch (\Exception $e) {
            DB::rollback();
            abort(500);
        }
    }
}
