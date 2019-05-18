<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model{
    public $timestamps = false;

    public function getProdes(){
        return $this->hasMany('App\Prode');
    }

    public function getCampeonato(){
        return $this->belongsTo('App\Campeonato');
    }

    public function getLocal(){
        return $this->hasOne('App\Equipo', 'id', 'local_id');
    }

    public function getVisitante(){
        return $this->hasOne('App\Equipo', 'id', 'visitante_id');
    }
}
