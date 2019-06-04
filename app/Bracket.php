<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bracket extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'competition_name', 'description', 'teams_no'
    ];
}
