<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    protected $fillable = [
        'prode_id',
        'equipo_1_id',
        'equipo_2_id',
        'equipo_1_goles',
        'equipo_2_goles'
    ];
}
