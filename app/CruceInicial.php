<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CruceInicial extends Model
{
    protected $table = "cruces_iniciales";

    //el 'id' lo agrega por defecto
    protected $fillable = ['llave_nro', 'nombre_A','nombre_B','bandera_A','bandera_B',];


  



    //mensajes de error
    public static function messages($id = '') {
        return [
           
        ];
    }
}
