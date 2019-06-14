<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Torneo extends Model
{
    protected $table= "torneo";
    protected $fillable= ['nombre','descripcion'];

   public function partidos()
    {
        return $this->hasMany('App\Partidos');
    }
}
