<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{

    protected $fillable = [
        'jugador_uno_id', 'jugador_dos_id', 'ronda'
    ];
    public function nombreJugadorUno(){
        
        return $this->belongsTo(\App\Jugadore::class, 'jugador_uno_id');
    }
    public function nombreJugadorDos(){
        
         return $this->belongsTo(\App\Jugadore::class, 'jugador_dos_id');
    }
}
