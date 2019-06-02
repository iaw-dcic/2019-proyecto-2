<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Decoracion extends Model
{
    public $table = "decorado";

    public function donut()
    {
    	return $this->belongsToMany(Donut::class);
    }
}
