<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Avatar extends Model {
    
    protected $fillable = [
        'avatar_name', 'owner', 'element1', 'element2', 'element3'
    ];

    protected $primaryKey = 'avatar_id';
    
    public function users () {
        return $this->belongsTo(User::class,'owner');
    }
}