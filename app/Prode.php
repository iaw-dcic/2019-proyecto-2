<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prode extends Model
{
    protected $fillable = [
        'user_id', 'name', 'cuartos', 'semis', 'final', 'campeon',
    ];
}
