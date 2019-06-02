<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Funda extends Model
{

    public $table = "cases";

    public function colorCase(){
        
        return $this->belongsToMany(ColorCase::class);
    }

}