<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    protected $fillable = ['name', 'selectedIngredient'];

    public function burgers()
    {
      return $this->belongsToMany(Burger::class);
    }

}
