<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Burger;

class Ingredient extends Model
{
    public function burgers()
    {
        return $this->belongsToMany(Burger::class);
    }
}
