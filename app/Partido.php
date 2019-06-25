<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    	 protected $fillable = [
        'id','id_prodes','id_equipo_1','id_equipo_2','goles_equipo_1',
            'goles_equipo_2',
    ];
    
}
