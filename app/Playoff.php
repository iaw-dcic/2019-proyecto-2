<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Playoff extends Model
{
   // public function teams(){

     //   return $this->hasMany(Team::class);
    //}
    protected $fillable = [
        'user_id', 'myPronostico',
    ];
}
