<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{

    /**Arreglo asociativo cuyo valor va a ser un array con los atributos que nosotros
       * queremos permitir que sean cargados de forma masiva.
       */
      protected $fillable = ['name','pais'];

      protected $timestamp = false;


}
