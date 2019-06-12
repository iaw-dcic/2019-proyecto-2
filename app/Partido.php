<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    protected $table= "partido";
    protected $fillable= ['id_local','id_visitante','id_ganador','user_id'];

public function equipos()
    {
        return $this->hasMany('App\Equipos');
    }
  
}

