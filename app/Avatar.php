<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Avatar extends Model {
    
    protected $fillable = [
        'avatar_name', 'owner', 'hair', 'shirt', 'beard'
    ];

    protected $primaryKey = 'avatar_id';
    
    public function users () {
        return $this->belongsTo (User::class, 'owner');
    }
}