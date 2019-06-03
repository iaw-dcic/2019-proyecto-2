<?php

use Illuminate\Database\Seeder;

class JugadoresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('jugadores')->insert([
            'nombre' => 'Novak Djokovic',
            'ranking'=> '1',
            'edad'=>'31',
            'pais'=>'Serbia' ,
            'abreviado'=>'DJO',
        ]);

        DB::table('jugadores')->insert([
            'nombre' => 'Rafael Nadal',
            'ranking'=> '2',
            'edad'=>'32',
            'pais'=>'España' ,
            'abreviado'=>'NAD',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Roger Federer',
            'ranking'=> '3',
            'edad'=>'37',
            'pais'=>'Suiza' ,
            'abreviado'=>'FED',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Alexander Zverev',
            'ranking'=> '4',
            'edad'=>'22',
            'pais'=>'Alemania' ,
            'abreviado'=>'ZVE',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Dominic Thiem',
            'ranking'=> '5',
            'edad'=>'25',
            'pais'=>'Austria' ,
            'abreviado'=>'THI',
        ]);

        DB::table('jugadores')->insert([
            'nombre' => 'Kei Nishikori',
            'ranking'=> '6',
            'edad'=>'29',
            'pais'=>'Japon' ,
            'abreviado'=>'NIS',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'J Martin del Potro',
            'ranking'=> '7',
            'edad'=>'30',
            'pais'=>'Argentina' ,
            'abreviado'=>'DPO',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Stefano Tsitisipas',
            'ranking'=> '8',
            'edad'=>'20',
            'pais'=>'Grecia',
            'abreviado'=>'TSI',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Marin Cilic',
            'ranking'=> '9',
            'edad'=>'30',
            'pais'=>'Croacia',
            'abreviado'=>'CIL',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Fabio Fognini',
            'ranking'=> '10',
            'edad'=>'31',
            'pais'=>'Italia',
            'abreviado'=>'FOG',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Karen Jachánov',
            'ranking'=> '11',
            'edad'=>'22',
            'pais'=>'Rusia',
            'abreviado'=>'JAC',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Daniil Medvedev',
            'ranking'=> '12',
            'edad'=>'23',
            'pais'=>'Rusia',
            'abreviado'=>'MED',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Borna Ćorić',
            'ranking'=> '13',
            'edad'=>'22',
            'pais'=>'Croacia',
            'abreviado'=>'COR',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Nikoloz Basilashvili',
            'ranking'=> '14',
            'edad'=>'27',
            'pais'=>'Georgia',
            'abreviado'=>'BAS',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Gaël Monfils',
            'ranking'=> '15',
            'edad'=>'32',
            'pais'=>'Francia',
            'abreviado'=>'MON',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Marco Cecchinato',
            'ranking'=> '16',
            'edad'=>'26',
            'pais'=>'Italia',
            'abreviado'=>'CEC',
        ]);
      
        DB::table('jugadores')->insert([
            'nombre' => 'Richard Gasquet',
            'pais'=>'Francia',
            'abreviado'=>'GAS',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Jeremy Chardy',
            'pais'=>'Francia',
            'abreviado'=>'CHA',
        ]);
        
        DB::table('jugadores')->insert([
            'nombre' => 'Jo-Wilfried Tsonga',
            'pais'=>'Francia',
            'abreviado'=>'TSO',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Roberto Bautista',
            'pais'=>'España',
            'abreviado'=>'BAU',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Andreas Seppi',
            'pais'=>'Italia',
            'abreviado'=>'SEP',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'John Millman',
            'pais'=>'Australia',
            'abreviado'=>'MIL',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Cameron Norrie',
            'pais'=>'Gran Bretaña',
            'abreviado'=>'NOR',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Albert Ramos',
            'pais'=>'España',
            'abreviado'=>'RAM',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Alex de Miñaur',
            'pais'=>'Gran Bretaña',
            'abreviado'=>'MIN',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Pablo Carreño',
            'pais'=>'España',
            'abreviado'=>'CAR',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Denis Shapovalov',
            'pais'=>'Canada',
            'abreviado'=>'SHA',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Casper Ruud',
            'pais'=>'Noruega',
            'abreviado'=>'RUD',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Daniel Evans',
            'pais'=>'Gran Britania',
            'abreviado'=>'EVA',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Lorenzo Sonego',
            'pais'=>'Italia',
            'abreviado'=>'SON',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Mijaíl Kukushkin',
            'pais'=>'Rusia',
            'abreviado'=>'KUK',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Laslo Djere',
            'pais'=>'Croacia',
            'abreviado'=>'DJE',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'F. Verdasco',
            'pais'=>'España',
            'abreviado'=>'VER',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Kyle Edmund',
            'pais'=>'Gran Bretaña',
            'abreviado'=>'EDM',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Félix Auger-Aliassime',
            'pais'=>'Canada',
            'abreviado'=>'AUG',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Grigor Dimitrov',
            'pais'=>'Bulgaria',
            'abreviado'=>'DIM',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'J-Lennard Struff',
            'pais'=>'Alemania',
            'abreviado'=>'STR',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Matteo Berrettini',
            'pais'=>'Italia',
            'abreviado'=>'BER',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'A. Basso',
            'pais'=>'Italia',
            'abreviado'=>'BAS',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Frances Tiafoe',
            'pais'=>'Francia',
            'abreviado'=>'TIA',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Joao Sousa',
            'pais'=>'Portugal',
            'abreviado'=>'SOU',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'D. Schwartzman',
            'pais'=>'Argentina',
            'abreviado'=>'SCH',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Yoshihito Nishioka',
            'pais'=>'Japon',
            'abreviado'=>'YNI',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Nick Kyrgios',
            'pais'=>'Australia',
            'abreviado'=>'KYR',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'David Goffin',
            'pais'=>'Belgica',
            'abreviado'=>'GOF',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Stan Wawrinka',
            'pais'=>'Suiza',
            'abreviado'=>'WAW',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Radu Albot',
            'pais'=>'Moldavia',
            'abreviado'=>'ALB',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Benoit Paire',
            'pais'=>'Francia',
            'abreviado'=>'PAI',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Taylor Fritz',
            'pais'=>'USA',
            'abreviado'=>'FRI',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Guido Pella',
            'pais'=>'Argentina',
            'abreviado'=>'PEL',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Steve Johnson',
            'pais'=>'USA',
            'abreviado'=>'JOH',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'J Sinner',
            'pais'=>'Italia',
            'abreviado'=>'SIN',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Gilles Simon',
            'pais'=>'Francia',
            'abreviado'=>'SIM',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'P. Kohlschreiber',
            'pais'=>'Alemania',
            'abreviado'=>'KOH',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Márton Fucsovics',
            'pais'=>'Hungría',
            'abreviado'=>'FUC',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'BYE',
            'pais'=>'-',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Lucas Puoille',
            'pais'=>'Francia',
            'abreviado'=>'POU',
        ]);

    }
}
