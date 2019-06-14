<?php
use Illuminate\Database\Seeder;
use \App\Equipo;
use Illuminate\Support\Facades\DB;
class EquiposSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    	

        Equipo::create([
            //'id' => 1,
            'nombre' => 'Brazil',
        ]);
        Equipo::create([
            //'id' => 2,
            'nombre' => 'Colombia',
        ]);
        Equipo::create([
            //'id' => 3,
            'nombre' => 'Paraguay',
        ]);
        Equipo::create([
            //'id' => 4,
            'nombre' => 'Chile',
        ]);
        Equipo::create([
            //'id' => 5,
            'nombre' => 'Argentina',
        ]);
        Equipo::create([
            //'id' => 6,
            'nombre' => 'Uruguay',
        ]);
        Equipo::create([
            //'id' => 7,
            'nombre' => 'Venezuela',
        ]);
        Equipo::create([
            //'id' => 8,
            'nombre' => 'Peru',
        ]);
        
    }
}