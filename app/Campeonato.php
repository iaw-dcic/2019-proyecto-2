<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campeonato extends Model{
    public $timestamps = false;

    public function getPartidos(){
        return $this->hasMany('App\Partido');
    }

    public function getPosiciones(){
        return $this->hasMany('App\Posiciones');
    }
}
