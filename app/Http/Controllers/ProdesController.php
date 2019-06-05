<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Prode;
use App\CruceInicial;
use App\Encuentro;
use App\Equipo;
use App\Cruce;
use Auth;
use Laracasts\Flash\Flash;

class ProdesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function prodeAll()
    {
        $user= Auth::user();
        $prodes = Prode::all()->toArray();
       
        $aux= array();
        foreach($prodes as $prode){
            if ($prode['user_id'] == $user->id)
                array_push ($aux,$prode);
        }

        return response()->json($aux);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function token(){
        $request->user()->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        return ['token' => $token];
    }




    public function prodeCreate(Request $request)
    {
        $user = Auth::user();
        
        //2da capa de validacion: si no la pasa me redirige a la misma pagina
         $prode= new Prode();
         $prode->nombre= $request->nombre;
           
        //dd($request->nombre);
        //$prode->nombre= $request->nombre;
        $prode->user_id= $user->id;   
        $prode->save();
        
         //obtengo los cruces inciales de mi db
         
         $crucesIniciales= CruceInicial::all();

         //creo los 8 primeros cruces
         foreach ($crucesIniciales as $ci){ 
            $cruce= new Cruce();
            $cruce->prode_id= $prode->id;
            $cruce->llave_nro= $ci->llave_nro;
            $cruce->save();

            $encuentro= new Encuentro();
            $encuentro->prode_id= $prode->id;
            $encuentro->cruce_id= $cruce->id;
            $encuentro->id_A= $ci->id_A;
            $encuentro->id_B= $ci->id_B;
            $encuentro->id_pasa= null;
            $encuentro->save();
         }

         //y los otros 7 sin equipos aun
         for($i=0;$i<7;$i++){
            $encuentro= new Encuentro();
            $encuentro->prode_id= $prode->id;
           
            $encuentro->save();

         }




        Flash::success("Prode ".$prode->nombre." ha sido creado con exito! ");

        return response()->json($prode);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //recibo id del prode
    public function prodeDetails($id)
    {
        $idInt= (int)$id;
        $encuentros= Encuentro::all()->where('prode_id', $idInt)->toArray();
      
        $aux= array(current($encuentros),next($encuentros),next($encuentros),next($encuentros),next($encuentros)
                    ,next($encuentros),next($encuentros),next($encuentros),next($encuentros),next($encuentros)
                    ,next($encuentros),next($encuentros),next($encuentros),next($encuentros),next($encuentros));
    
        return response()->json($aux);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function prodeEdit(Request $request)
    {
        $prode = Prode::find($request->id);
        $prode->nombre =$request->nombre;
        $prode->save();

        return response()->json($prode);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function prodeDelete($prodeId)
    {
        $prode = Prode::findOrFail($prodeId);
        $prode->delete();
  
        return response()->json('Successfully Deleted');
    }




    public function getEquipos()
    {
       
        $equipos= Equipo::all()->toArray();

        return response()->json($equipos);
    }


    public function prodeUpdate(Request $request){

       foreach($request->eliminatorias as $eliminatoria){
            $encuentro= Encuentro::where('id',$eliminatoria['id'])->where('prode_id',$eliminatoria['prode_id'])
             ->update([
                'id_A' => $eliminatoria['id_A'],
                'id_B' => $eliminatoria['id_B'],
                'id_pasa' => $eliminatoria['id_pasa']
            ]); 
        }
       
        return response()->json('200 OK');
    }

}
