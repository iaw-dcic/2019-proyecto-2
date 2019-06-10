<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Avatar extends Model
{

    protected $visible = [
        'id', 'user_id', 'features'
    ];

    protected $casts = [
        'features' => 'array',
    ];
    //
    protected $attributes = [
        'features' => '{
            "Piel":"Clara",
            "Pelo":"Corto",
            "Color del pelo":"Rubio",
            "Ropa":"Buzo",
            "Color de la ropa":"Negro"
        }'
    ];
}
