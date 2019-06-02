<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Donut extends Model
{
    public $table = "donut";

    protected $fillable = [
        'user_id', 'sabor_id', 'glaseado_id', 'decorado_id',
    ];

    public function sabor()
    {
    	return $this->hasOne(Sabor::class);
    }

    public function decoracion()
    {
    	return $this->hasOne(Decoracion::class);
    }

    public function glaseado()
    {
    	return $this->hasOne(Glaseado::class);
    }

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
}
