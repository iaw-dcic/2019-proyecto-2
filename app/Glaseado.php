<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Glaseado extends Model
{
    public $table = "glaseado";

    public function donut()
    {
    	return $this->belongsToMany(Donut::class);
    }
}
