<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cuarto extends Model
{
    protected $fillable = [
        'semifinal_id','teamname1','teamname2','teamname3','teamname4',
        'teamname5','teamname6','teamname7','teamname8',
    ];

    public function semifinals()
    {
        return $this->hasMany('App\Semifinal');
    }
}
