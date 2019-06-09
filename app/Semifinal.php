<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Semifinal extends Model
{
    protected $fillable = [
        'final_id','teamname1','teamname2','teamname3','teamname4',
    ];

    public function finals()
    {
        return $this->hasMany('App\Final');
    }
}
