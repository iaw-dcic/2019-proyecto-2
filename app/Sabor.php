<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sabor extends Model
{
    public $table = "sabor";

    public function donut()
    {
    	return $this->belongsToMany(Donut::class);
    }
}
