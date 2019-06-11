<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Match extends Model
{

    protected $fillable = [ //lo agrego despues cuando resuelva lo de guardar partidos porque no me muestra lo de la bd sino
        'team1_id',
        'team2_id',
        'prediction',
          'ronda',
    ];


}
