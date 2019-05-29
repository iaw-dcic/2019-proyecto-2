<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UpperBodyItem extends Model
{
    //

    public function avatar()
    {
        return $this->belongsTo('App\Avatar');
    }

}
