<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model{
    public $timestamps = false;

    public function getTorneo(){
        return $this->belongsTo('App\Torneo');
    }
}
