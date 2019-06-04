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
                    'nombre_A'=> 'Holanda',
                    'nombre_B'=> 'Nigeria',
                    'bandera_A'=> '/images/holanda.png',
                    'bandera_B'=> '/images/nigeria.png'
                ],[
                    'llave_nro'=> '2',
                    'nombre_A'=> 'España',
                    'nombre_B'=> 'Mexico',
                    'bandera_A'=> '/images/espana.png',
                    'bandera_B'=> '/images/mexico.png'
                ],[
                    'llave_nro'=> '3',
                    'nombre_A'=> 'Inglaterra',
                    'nombre_B'=> 'Alemania',
                    'bandera_A'=> '/images/inglaterra.png',
                    'bandera_B'=> '/images/alemania.png'
                ],[
                    'llave_nro'=> '4',
                    'nombre_A'=> 'Brasil',
                    'nombre_B'=> 'Portugal',
                    'bandera_A'=> '/images/brasil.png',
                    'bandera_B'=> '/images/portugal.png'
                ],[
                    'llave_nro'=> '5',
                    'nombre_A'=> 'Francia',
                    'nombre_B'=> 'Croacia',
                    'bandera_A'=> '/images/francia.png',
                    'bandera_B'=> '/images/croacia.png'
                ],[
                    'llave_nro'=> '6',
                    'nombre_A'=> 'Uruguay',
                    'nombre_B'=> 'Egipto',
                    'bandera_A'=> '/images/uruguay.png',
                    'bandera_B'=> '/images/egipto.png'
                ],[
                    'llave_nro'=> '7',
                    'nombre_A'=> 'Colombia',
                    'nombre_B'=> 'Italia',
                    'bandera_A'=> '/images/colombia.png',
                    'bandera_B'=> '/images/italia.png'
                ],[
                    'llave_nro'=> '8',
                    'nombre_A'=> 'Argentina',
                    'nombre_B'=> 'Belgica',
                    'bandera_A'=> '/images/argentina.png',
                    'bandera_B'=> '/images/belgica.png'
                ],
        ]);    
    }
}
