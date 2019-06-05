<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Prode;
use App\Partido;
use App\ListaPartido;
use App\User;

class ProdeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->middleware('auth');
        $userLog=Auth::user();
        $result = Prode::where('user_id',$userLog->id)->paginate(6);
        return $result;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->middleware('auth');
        $userLog = Auth::user();
        $prode = new Prode();
        $prode->name = $request->prode_name;
        $prode->user_id = $userLog->id;
        $prode->save();

        for ($x = 1; $x <= 31; $x++) {
            $partido = new Partido();
            $partidoBase = Partido::find($x);
            $partido->prode_id = $prode->id;
            $partido->numero_partido=$x;
            $partido->ronda = $partidoBase->ronda;
            $partido->equipo_1_nombre = $partidoBase->equipo_1_nombre;
            $partido->equipo_2_nombre = $partidoBase->equipo_2_nombre;
            $partido->equipo_1_escudo = $partidoBase->equipo_1_escudo;
            $partido->equipo_2_escudo = $partidoBase->equipo_2_escudo;
            $partido->save();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $this->middleware('auth');
        $prode = Prode::find($id);
        if($prode){
            $user = User::find($prode->user_id);
            if($user && Auth::user()->id == $user->id){
                return $prode;
            }
            else{
                abort(403,'Usuario no autorizado');
            }
        }
        else{
            abort(403,'Usuario no autorizado');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->middleware('auth');
        $prode = Prode::find($id);
        if($prode){
            $user = User::find($prode->user_id);
            if($user && Auth::user()->id == $user->id){
                $prode->name = $request->prode_name;
                $prode->save();
            }
            else{
                abort(403,'Usuario no autorizado');
            }
        }
        else{
            abort(403,'Usuario no autorizado');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->middleware('auth');
        $prode = Prode::find($id);
        if($prode){
            $user = User::find($prode->user_id);
            if($user && Auth::user()->id == $user->id){
                $prode->delete();
            }
            else{
                abort(403,'Usuario no autorizado');
            }
        }
        else{
            abort(403,'Usuario no autorizado');
        }
    }
}
