<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListaPartido extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function partidos(){
        return $this->hasMany(Partido::class);
    }
}
