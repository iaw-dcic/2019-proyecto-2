<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prode extends Model
{

    protected $table = "prodes";

    //el 'id' lo agrega por defecto
    protected $fillable = ['user_id','nombre',];



    //Relaciones      1 prode -> muchos encuentros
    public function encuentros(){
        return $this->hasMany('App\Encuentro'); 
    }

    //Relaciones      1 prode -> muchos cruces
    public function cruces(){
        return $this->hasMany('App\Cruce'); 
    }


    //Relaciones      muchas prodes -> 1 usuario
    public function usuario(){
        return $this->belongsTo('App\User');
    }


    //mensajes de error
    public static function messages($id = '') {
        return [
            'nombre.required' => 'Debe ingresar un nombre para el prode',
            'nombre.min' =>'El nombre del prode debe ser de 3 caracteres o mas',
        ];
    }
}
