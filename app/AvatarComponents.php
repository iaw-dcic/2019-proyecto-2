<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AvatarComponents extends Model {
    
    protected $fillable = [
        'element_type', 'element_source', 'element_var'
    ];

    protected $primaryKey = 'element_id';
}