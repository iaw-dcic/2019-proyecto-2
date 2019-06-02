<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Playoff extends Model
{
    protected $fillable = [
        'user_id','name', 'octavos_id', 'ganador',
    ];

    public function octavos(){

       return $this->hasMany('App\Octavo');
    }
}
