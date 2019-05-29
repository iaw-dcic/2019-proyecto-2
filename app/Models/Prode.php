<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prode extends Model
{
    // Le indicamos el nombre de la tabla
    public $table = "prode";

    // Configurara los campos
    protected $fillable = ["user_id, nombre"];
}
