<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LowerBodyItem extends Model
{
    //

    public function avatar()
    {
        return $this->belongsTo('App\Avatar');
    }
}
