<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipo extends Model{
    public $timestamps = false;

    public function getPosicion(){
        return $this->hasOne('App\PosicionesCampeonato');
    }

    public function getPartidos(){
        return $this->hasMany('App\Partido');
    }
}
