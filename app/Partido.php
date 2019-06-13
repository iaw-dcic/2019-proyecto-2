<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    public function listaPartido()
    {
        return $this->belongsTo(ListaPartido::class);
    }

    protected $fillable = [
        'prode_id',
        'ronda',
        'equipo_1_nombre',
        'equipo_2_nombre',
        'equipo_ganador_nombre',
        'equipo_1_escudo',
        'equipo_2_escudo',
        'equipo_ganador_escudo',
        'equipo_1_goles',
        'equipo_2_goles'
    ];
}
