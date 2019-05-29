<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Funda extends Model
{

    public $table = "cases";

    public function product(){
        
        return $this->belongsToMany(Product::class);
    }

}