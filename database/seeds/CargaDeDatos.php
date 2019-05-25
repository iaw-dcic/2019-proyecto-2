<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CargaDeDatos extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //cargando los 16 equipos de los octavos del mundial
        DB::table('equipos')->insert([
            [
                'nombre'=> 'Argentina',
                'bandera'=> 'src',
                'continente'=> 'Sudamerica'
            ],[
                'nombre'=> 'Brasil',
                'bandera'=> 'src',
                'continente'=> 'Sudamerica'
            ],[
                'nombre'=> 'Colombia',
                'bandera'=> 'src',
                'continente'=> 'Sudamerica'
            ],[
                'nombre'=> 'Uruguay',
                'bandera'=> 'src',
                'continente'=> 'Sudamerica'
            ],[
                'nombre'=> 'Mexico',
                'bandera'=> 'src',
                'continente'=> 'Norte y CentroAmerica'
            ],[
                'nombre'=> 'Alemania',
                'bandera'=> 'src',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Belgica',
                'bandera'=> 'src',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Croacia',
                'bandera'=> 'src',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'España',
                'bandera'=> 'src',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Francia',
                'bandera'=> 'src',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Inglaterra',
                'bandera'=> 'src',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Italia',
                'bandera'=> 'src',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Holanda',
                'bandera'=> 'src',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Portugal',
                'bandera'=> 'src',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Egipto',
                'bandera'=> 'src',
                'continente'=> 'Africa'
            ],[
                'nombre'=> 'Nigeria',
                'bandera'=> 'src',
                'continente'=> 'Africa'
            ],
        ]);


        //cargando las 8 llaves/cruces de octavos de final
        DB::table('cruces_iniciales')->insert([
                [
                    'llave_nro'=> '1',
                    'id_A'=> '13',
                    'id_B'=> '16'
                ],[
                    'llave_nro'=> '2',
                    'id_A'=> '9',
                    'id_B'=> '5'
                ],[
                    'llave_nro'=> '3',
                    'id_A'=> '11',
                    'id_B'=> '6'
                ],[
                    'llave_nro'=> '4',
                    'id_A'=> '2',
                    'id_B'=> '14'
                ],[
                    'llave_nro'=> '5',
                    'id_A'=> '10',
                    'id_B'=> '8'
                ],[
                    'llave_nro'=> '6',
                    'id_A'=> '4',
                    'id_B'=> '15'
                ],[
                    'llave_nro'=> '7',
                    'id_A'=> '3',
                    'id_B'=> '12'
                ],[
                    'llave_nro'=> '8',
                    'id_A'=> '1',
                    'id_B'=> '7'
                ],
        ]);    
    }
}
