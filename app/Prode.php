<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prode extends Model{
    public $timestamps = false;

    public function getUser(){
        return $this->belongsTo('App\User');
    }

    public function getPartido(){
        return $this->belongsTo('App\Partido');
    }
}
