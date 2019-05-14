<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pants extends Model
{
    //
    
    public function avatar(){
        this.belongsTo(avatar::class);
    }
}
