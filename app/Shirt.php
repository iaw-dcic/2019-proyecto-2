<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shirt extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'color', 'type', 'user_id', 'design_name', 'decoration'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
