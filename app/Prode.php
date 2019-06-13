<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prode extends Model
{

    public function partidos()
    {
        return $this->hasMany('App\Partido');
    }

}
