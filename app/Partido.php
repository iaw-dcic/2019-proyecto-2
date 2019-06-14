<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    protected $table= "partido";
    protected $fillable= ['id_equipo_local','id_equipo_visitante','id_equipo_ganador','user_id','id_torneo'];

public function equipos()
    {
        return $this->hasMany('App\Equipos');
    }
  
}

