<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prode extends Model{
    public $timestamps = false;

    public function getUsers(){
        return $this->belongsToMany('App\User')->using('App\ProdeUser');
    }

    public function getPartidos(){
        return $this->belongsToMany('App\Partido')->using('App\PartidoProde');
    }
}
