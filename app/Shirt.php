<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shirt extends Model
{
    protected $fillable = [
        'name', 'stampa_id', 'colour',' user_id',
    ];
}
