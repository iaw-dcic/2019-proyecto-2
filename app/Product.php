<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    public $table = "products";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_user',
        'id_case',
        'id_color',
        'id_image',
    ];


    public function user(){
        
        return $this->belongsTo(User::class);
    }

    public function image(){
        return $this->hasOne(Image::class);
    }

    public function colorCase(){
        return $this->hasOne(ColorCase::class);
    }


}