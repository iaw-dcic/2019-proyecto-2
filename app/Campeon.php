<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campeon extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'bracket_id', 'team_id'
    ];
}
