<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class avatar extends Model
{
    /*Lista de componentes de partes del avatar 
    */
    protected $fillable = [
        'name', 'body',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
