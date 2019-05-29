<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{

    public $table = "colors";

    public function product(){
        
        return $this->belongsToMany(Product::class);
    }

}
