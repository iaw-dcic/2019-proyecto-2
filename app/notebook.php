<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class notebook extends Model
{
    //
    protected $fillable = [
        'sizeid','modelid', 'colorid','url',
    ];
}
