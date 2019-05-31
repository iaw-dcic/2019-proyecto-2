<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipo extends Model{
    public $timestamps = false;

    public function getPartidos(){
        return $this->belongsTo('App\Partido');
    }
}
