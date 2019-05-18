<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PosicionesCampeonato extends Model{
    public $timestamps = false;

    public function getCampeonato(){
        return $this->belongsTo('App\Campeonato');
    }

    public function getEquipo(){
        return $this->belongsTo('App\Equipo');
    }
}
