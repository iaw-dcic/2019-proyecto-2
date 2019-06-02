<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Team;
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
            $arr[] = ['name' => $team->name]; //, 'pais' => $team->pais];
        }
        return Response::json($arr);
    }
   
    /*public function playoffs()
    {
        $arr = [];
        $playoffs = User::where('user_id',auth()->id())->get()->playoffs()->getResults();
        foreach ($playoffs as $playoff) {
            $playoffArr = ['id' => $playoff->id, 'title' => $playoff->title];
            array_push($arr, $playoffArr);
        }
        return Response::json($arr);
    }*/
    
    public function store(Request $request)
    {
        $data = $request->all();
        $cuartos = $data['cuartos'];
        $result = '';
        for($i=0; $i<8; $i++){
            if($cuartos[$i]!=null){
                $result .= $i;
                $result .= $cuartos[$i];
                if($i<7)
                    $result .= '-';
            }
        }
        $result .= '/';

        $semifinal = $data['semifinal'];
        for($i=0; $i<4; $i++){
            if($semifinal[$i]!=null){
                $result .= $i;
                $result .= $semifinal[$i];
                if($i<3)
                    $result .= '-';
            }
        }
        $result .= '/';

        $final = $data['semifinal'];
        for($i=0; $i<4; $i++){
            if($final[$i]!=null){
                $result .= $i;
                $result .= $final[$i];
                if($i<1)
                    $result .= '-';
            }
        }
        $result .= '/';

        $result .= $data['ganador'];

    
        Playoff::create([
            'user_id' => 1, 
            'myPronostico' => $result,
        ]);
        return response()->json([$data]);
    }

    /*
    public function delete($id)
    {
        try {
            DB::beginTransaction();
            $playoff = Playoff::where('id',$id)->first();
            $raiz = Node::where('id',$playoff->raiz)->first();
            $arbol = $raiz->getArbolEnArreglo();
            $playoff->delete();
            foreach($arbol as $nodo){
                $nodo->delete();
            }
            DB::commit();
            return response()->json([$id]);
        } catch (\Exception $e) {
            DB::rollback();
            abort(500);
        }
    }*/
}
