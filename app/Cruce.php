<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cruce extends Model
{
    protected $table = "cruces";

    //el 'id' lo agrega por defecto
    protected $fillable = ['prode_id','llave_nro','id_A','id_B',];


    //Relaciones      muchas cruces -> 1 prode
    public function prode(){
        return $this->belongsTo('App\Prode');
    }

    //un cruce -> 1 encuentro
    public function encuentro(){
        return $this -> hasOne('App\Encuentro');
    }
    

    //Un cruce -> 2 equipos
    public function equipos(){
        return $this->belongsToMany('App\Equipo');
    }




    //mensajes de error
    public static function messages($id = '') {
        return [
           
        ];
    }
}
