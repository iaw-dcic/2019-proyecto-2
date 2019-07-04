<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    public function listaPartido()
    {
        return $this->belongsTo(ListaPartido::class);
    }
}
