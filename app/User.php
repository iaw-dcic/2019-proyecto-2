<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable
{
    /**
     * Como es una interfaz tengo que poner todos los metodos de esa interfaz.
     */
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'api_token'
    ];

}
