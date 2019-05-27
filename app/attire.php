<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class attire extends Model
{
    protected $fillable = [
        'type','source'
    ];

    public function avatar(){
        $this->belongsTo(avatar::class);
    }
}
