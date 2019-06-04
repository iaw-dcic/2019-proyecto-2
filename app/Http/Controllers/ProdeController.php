<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Prode;
use App\Team;

class ProdeController extends Controller
{
    
    public function index(){

        /*$prode = Prode::all()->first();
        $cuartos = explode(',', $prode->cuartos);
        $semis = explode(',', $prode->semis);
        $final = explode(',', $prode->final);
        $campeon = $prode->campeon;
        $response = ['cuartos' => $cuartos, 'semis' => $semis, 'final' => $final, 'campeon' => $campeon];*/

        $octavos = Team::all();
        $response = [];
        for ($i = 0; $i < 16; $i++) {
            $response[$i] = $octavos[$i]->name;
        }
        return response()->json($response);
    }

    public function prode(){

        $response = Prode::where('user_id', auth('api')->user()->id)->select('id','name', 'created_at')->get();
        return response()->json($response);
    }
    
    public function prodeid($id){
        $prode = Prode::find($id);
        $octavos = explode(',', $prode->octavos);
        $cuartos = explode(',', $prode->cuartos);
        $semis = explode(',', $prode->semis);
        $final = explode(',', $prode->final);
        $response = ['octavos' => $octavos, 'cuartos' => $cuartos, 'semis' => $semis, 'final' => $final, 'campeon' => $prode->campeon, 'name' => $prode->name];
        return response()->json($response);
    }

    public function store(Request $request){
        $octavos = implode(',', $request->input('data.octavos'));
        $cuartos = implode(',', $request->input('data.cuartos'));
        $semis = implode(',', $request->input('data.semis'));
        $final = implode(',', $request->input('data.final'));
        $campeon = $request->input('data.campeon');
        $name = $request->input('data.name');
        $prode = new Prode();
        $prode->user_id = auth('api')->user()->id;
        $prode->name = $name;
        $prode->octavos = $octavos;
        $prode->cuartos = $cuartos;
        $prode->semis = $semis;
        $prode->final = $final;
        $prode->campeon = $campeon;
        $prode->save();
        return response()->json($prode);
    }

    public function update(Request $request){
        $prode = Prode::findorfail($request->input('data.prode_id'));
        $octavos = implode(',', $request->input('data.octavos'));
        $cuartos = implode(',', $request->input('data.cuartos'));
        $semis = implode(',', $request->input('data.semis'));
        $final = implode(',', $request->input('data.final'));
        $campeon = $request->input('data.campeon');
        $name = $request->input('data.name');

        $prode->name = $name;
        $prode->octavos = $octavos;
        $prode->cuartos = $cuartos;
        $prode->semis = $semis;
        $prode->final = $final;
        $prode->campeon = $campeon;
        $prode->update();
        return response()->json($prode);
    }

    public function delete($id){
        Prode::find($id)->delete();
        $response = Prode::where('user_id', auth('api')->user()->id)->select('id','name', 'created_at')->get();
        return response()->json($response);
    }
}
