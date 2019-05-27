<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Burger extends Model
{
    public function ingredients()
    {
      return $this->hasMany(Ingredient::class);
    }
}
