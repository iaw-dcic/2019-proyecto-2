<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Ingredient;

class Burger extends Model
{
    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class);
    }
}
