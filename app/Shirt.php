<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shirt extends Model
{
    protected $fillable = [
        'color','tela','talle','logo', 'user_id'
    ];
}
