<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Avatar extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','body_id','head_id','upperbody_id','lowerbody_id','extra_id'
    ];


    /**
     * Default attributes
     *
     * @var array
     */
    protected $attributes = [
        'body_id' => 1,
        'head_id' => 1,
        'upperbody_id' => 1,
        'lowerbody_id' => 1,
        'extra_id' => 1,
    ];



    public function user()
    {
        return $this->belongsTo('App\User');
    }

    

    public function bodyItem()
    {
        return $this->hasOne('App\BodyItem');
    }

    public function headItem()
    {
        return $this->hasOne('App\HeadItem');
    }

    public function upperBodyItem()
    {
        return $this->hasOne('App\UpperBodyItem');
    }

    public function lowerBodyItem()
    {
        return $this->hasOne('App\LowerBodyItem');
    }

    public function extraItem()
    {
        return $this->hasOne('App\ExtraItem');
    }
}
