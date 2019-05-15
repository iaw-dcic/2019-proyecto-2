<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Torneo extends Model{
    public $timestamps = false;

    public function getPartidos(){
        return $this->hasMany('App\Partido');
    }
}
