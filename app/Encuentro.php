<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Encuentro extends Model
{
    protected $table = "encuentros";

    //el 'id' lo agrega por defecto
    protected $fillable = ['llave_nro','resultado',];


    //Relaciones      muchas encuentros -> 1 prode
    //public function prode(){
    //    return $this->belongsTo('App\Prode');
   // }

    //Un encuentro -> 1 cruce
    public function cruce(){
        return $this->belongsTo('App\Cruce');
    }

    

    //Un encuentro -> 2 equipos
    //public function equipos(){
    //    return $this->belongsToMany('App\Equipo');
    //}




    //mensajes de error
    public static function messages($id = '') {
        return [
            'llave_nro.required' => 'Debe ingresar un numero de llave/cruce para el prode',
            'equipo_A.required' =>'Debe ingresar un equipo local para el cruce',
            'equipo_B.required' =>'Debe ingresar un equipo visitante para el cruce',
            'resultado.required' =>'Debe ingresar un resultado para el cruce',
        ];
    }
}
