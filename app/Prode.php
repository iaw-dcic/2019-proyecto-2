<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prode extends Model
{
    protected $fillable = [
        'octavos', 
        'cuartos', 
        'semis', 
        'final', 
        'champ',
        'user_id'
    ];
}
