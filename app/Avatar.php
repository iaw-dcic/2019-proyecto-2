<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Avatar extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'name', 'body_id', 'hair_id', 'eyes_id', 'nose_id', 'mouth_id',
    ];
}
