<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prode extends Model
{
    protected $table = 'prodes';

    public $primaryKey ='id';

    public  $timestamps = true;

    public function matchs(){
        return $this->hasMany('\App\Match');
    }

}
