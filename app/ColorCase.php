<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ColorCase extends Model
{

    public $table = "cases_color";

    public function color(){
        
        return $this->hasMany(Color::class);
    }

    public function funda(){
        
        return $this->hasMany(Funda::class);
    }

    public function product(){
        
        return $this->belongsToMany(Product::class);
    }

}