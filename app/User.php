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
        'name', 'email', 'password','api_token'
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


    //Relaciones        1 usuario -> muchos prodes
    public function prodes(){
        return $this->hasMany('App\Prode'); 
    }

     //mensajes de error
     public static function messages($id = '') {
        return [
            'name.required' => 'Debe ingresar un nombre de usuario',
            'email.required' => 'Debe ingresar un email',
            'email.uniqued' => 'Ya existe un usuario con ese email',
            'password.required' => 'Debe ingresar una password',
        ];
    }
}
