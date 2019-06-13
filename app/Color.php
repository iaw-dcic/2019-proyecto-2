<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{

    public $table = "colors";

    public function colorCase(){
        
        return $this->belongsToMany(ColorCase::class);
    }

}
