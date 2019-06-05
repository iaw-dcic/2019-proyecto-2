<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prediction extends Model
{
    protected $table = 'predictions';

    public function match()
    {
    	return $this->hasOne('App\Match', 'prediction_id');
    }
}
