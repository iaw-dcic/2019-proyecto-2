<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AvatarFeature extends Model
{
    // non-incrementing or a non-numeric primary key
    public $incrementing = false;
    // set primary key name
    protected $primaryKey = 'feature_name';

    public function options(){
        return $this->hasMany('App\AvatarFeatureOption', 'avatar_feature', 'feature_name');
    }
}
