<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pronostico extends Model{

    public function getUser(){
        return $this->belongsTo('App\User');
    }

    public function getPartido(){
        return $this->belongsTo('App\Partido');
    }
}
