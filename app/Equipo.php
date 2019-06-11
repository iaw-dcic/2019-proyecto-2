<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipo extends Model
{
    protected $table = "equipos";

    //el 'id' lo agrega por defecto
    protected $fillable = ['nombre','bandera','continente',];


    //Relaciones      muchas equipos -> muchos encuentros
    //public function encuentros(){
    //    return $this->belongsToMany('App\Encuentro');
    //}



    //mensajes de error
    public static function messages($id = '') {
        return [
          
        ];
    }
}
