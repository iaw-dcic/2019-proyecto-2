<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Partido;
use App\Cuarto;

class Pronostico extends Model
{
    protected $fillable = [
        'user_id'
    ];

    public function inicializarCuartos(){
        
        $partido1 = Partido::create([
            'pronostico_id' => $this->id,
            'codigo_sel_A' => 'BRA',
            'codigo_sel_B' => 'PAR',
            'ingreso_goles' => false
            ]);
        
        
        $partido2 = Partido::create([
            'pronostico_id' => $this->id,
            'codigo_sel_A' => 'PER',
            'codigo_sel_B' => 'COL',
            'ingreso_goles' => false
        ]);
       
        $partido3 = Partido::create([
            'pronostico_id' => $this->id,
            'codigo_sel_A' => 'ARG',
            'codigo_sel_B' => 'CHI',
            'ingreso_goles' => false
        ]);
        
        $partido4 = Partido::create([
            'pronostico_id' => $this->id,
            'codigo_sel_A' => 'URU',
            'codigo_sel_B' => 'ECU',
            'ingreso_goles' => false
        ]);

        Cuarto::create([
            'id_partido' => $partido1->id
        ]);
        Cuarto::create([
            'id_partido' => $partido2->id
        ]);
        Cuarto::create([
            'id_partido' => $partido3->id
        ]);
        Cuarto::create([
            'id_partido' => $partido4->id
        ]);
    }
}
