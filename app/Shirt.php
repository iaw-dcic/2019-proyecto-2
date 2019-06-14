<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shirt extends Model
{
    protected $fillable = [
        'stampa_id', 'colour','size','user_id'
    ];
}
