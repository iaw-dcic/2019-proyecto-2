<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    // protected $attributes = [
    //     'avatar' => '{
    //         "Piel":"Clara",
    //         "Pelo":"Corto",
    //         "Color del pelo":"Rubio",
    //         "Ropa":"Buzo",
    //         "Color de la ropa":"Negro"
    //     }'
    // ];

    public function avatars(){
        return $this->hasMany('App\Avatar');
        // return $this->hasMany('App\Avatar', 'avatar_feature', 'feature_name');
    }
}
