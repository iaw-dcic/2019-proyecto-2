<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Octavo extends Model
{
    protected $fillable = [
        'cuartos_id','teamname1','teamname2','teamname3','teamname4','teamname5','teamname6',
        'teamname7','teamname8','teamname9','teamname10','teamname11','teamname12','teamname13',
        'teamname14','teamname15','teamname16',
    ];

    public function cuartos()
    {
        return $this->hasMany('App\Cuarto');
    }
}
