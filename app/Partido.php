<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    protected $fillable = [
        'pronostico_id','ronda', 'codigo_sel_A', 'codigo_sel_B', 'goles_B', 'goles_A', 'ingreso_goles'
    ];
}
