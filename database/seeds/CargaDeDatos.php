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
                'bandera'=> '/images/argentina.png',
                'continente'=> 'Sudamerica'
            ],[
                'nombre'=> 'Brasil',
                'bandera'=> '/images/brasil.png',
                'continente'=> 'Sudamerica'
            ],[
                'nombre'=> 'Colombia',
                'bandera'=> '/images/colombia.png',
                'continente'=> 'Sudamerica'
            ],[
                'nombre'=> 'Uruguay',
                'bandera'=> '/images/uruguay.png',
                'continente'=> 'Sudamerica'
            ],[
                'nombre'=> 'Mexico',
                'bandera'=> '/images/mexico.png',
                'continente'=> 'Norte y CentroAmerica'
            ],[
                'nombre'=> 'Alemania',
                'bandera'=> '/images/alemania.png',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Belgica',
                'bandera'=> '/images/belgica.png',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Croacia',
                'bandera'=> '/images/croacia.png',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'España',
                'bandera'=> '/images/espana.png',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Francia',
                'bandera'=> '/images/francia.png',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Inglaterra',
                'bandera'=> '/images/inglaterra.png',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Italia',
                'bandera'=> '/images/italia.png',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Holanda',
                'bandera'=> '/images/holanda.png',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Portugal',
                'bandera'=> '/images/portugal.png',
                'continente'=> 'Europa'
            ],[
                'nombre'=> 'Egipto',
                'bandera'=> '/images/egipto.png',
                'continente'=> 'Africa'
            ],[
                'nombre'=> 'Nigeria',
                'bandera'=> '/images/nigeria.png',
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
