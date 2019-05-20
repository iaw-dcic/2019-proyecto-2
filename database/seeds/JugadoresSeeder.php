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
        ]);

        DB::table('jugadores')->insert([
            'nombre' => 'Rafael Nadal',
            'ranking'=> '2',
            'edad'=>'32',
            'pais'=>'España' ,
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Roger Federer',
            'ranking'=> '3',
            'edad'=>'37',
            'pais'=>'Suiza' ,
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Alexander Zverev',
            'ranking'=> '4',
            'edad'=>'22',
            'pais'=>'Alemania' ,
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Dominic Thiem',
            'ranking'=> '5',
            'edad'=>'25',
            'pais'=>'Austria' ,
        ]);

        DB::table('jugadores')->insert([
            'nombre' => 'Kei Nishikori',
            'ranking'=> '6',
            'edad'=>'29',
            'pais'=>'Japon' ,
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Juan Martin del Potro',
            'ranking'=> '7',
            'edad'=>'30',
            'pais'=>'Argentina' ,
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Stefano Tsitisipas',
            'ranking'=> '8',
            'edad'=>'20',
            'pais'=>'Grecia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Marin Cilic',
            'ranking'=> '9',
            'edad'=>'30',
            'pais'=>'Croacia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Fabio Fognini',
            'ranking'=> '10',
            'edad'=>'31',
            'pais'=>'Italia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Karen Jachánov',
            'ranking'=> '11',
            'edad'=>'22',
            'pais'=>'Rusia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Daniil Medvedev',
            'ranking'=> '12',
            'edad'=>'23',
            'pais'=>'Rusia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Borna Ćorić',
            'ranking'=> '13',
            'edad'=>'22',
            'pais'=>'Croacia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Nikoloz Basilashvili',
            'ranking'=> '14',
            'edad'=>'27',
            'pais'=>'Georgia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Gaël Monfils',
            'ranking'=> '15',
            'edad'=>'32',
            'pais'=>'Francia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Marco Cecchinato',
            'ranking'=> '16',
            'edad'=>'26',
            'pais'=>'Italia',
        ]);
      
        DB::table('jugadores')->insert([
            'nombre' => 'Richard Gasquet',
            'pais'=>'Francia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Jeremy Chardy',
            'pais'=>'Francia',
        ]);
        
        DB::table('jugadores')->insert([
            'nombre' => 'Jo-Wilfried Tsonga',
            'pais'=>'Francia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Roberto Bautista',
            'pais'=>'España',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Andreas Seppi',
            'pais'=>'Italia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'John Millman',
            'pais'=>'Australia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Cameron Norrie',
            'pais'=>'Gran Bretaña',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Albert Ramos',
            'pais'=>'España',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Alex de Miñaur',
            'pais'=>'Gran Bretaña',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Pablo Carreño',
            'pais'=>'España',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Denis Shapovalov',
            'pais'=>'Canada',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Casper Ruud',
            'pais'=>'Noruega',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Daniel Evans',
            'pais'=>'Gran Britania',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Lorenzo Sonego',
            'pais'=>'Italia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Mijaíl Kukushkin',
            'pais'=>'Rusia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Laslo Djere',
            'pais'=>'Croacia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Fernando Verdasco',
            'pais'=>'España',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Kyle Edmund',
            'pais'=>'Gran Bretaña',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Félix Auger-Aliassime',
            'pais'=>'Canada',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Grigor Dimitrov',
            'pais'=>'Bulgaria',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Jan-Lennard Struff',
            'pais'=>'Alemania',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Matteo Berrettini',
            'pais'=>'Italia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'A. Basso',
            'pais'=>'Italia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Frances Tiafoe',
            'pais'=>'Francia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Joao Sousa',
            'pais'=>'Portugal',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Diego Schwartzman',
            'pais'=>'Argentina',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Yoshihito Nishioka',
            'pais'=>'Japon',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Nick Kyrgios',
            'pais'=>'Australia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'David Goffin',
            'pais'=>'Belgica',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Stan Wawrinka',
            'pais'=>'Suiza',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Radu Albot',
            'pais'=>'Moldavia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Benoit Paire',
            'pais'=>'Francia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Taylor Fritz',
            'pais'=>'USA',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Guido Pella',
            'pais'=>'Argentina',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Steve Johnson',
            'pais'=>'USA',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'J Sinner',
            'pais'=>'Italia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Gilles Simon',
            'pais'=>'Francia',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Philipp Kohlschreiber',
            'pais'=>'Alemania',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Márton Fucsovics',
            'pais'=>'Hungría',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'BYE',
            'pais'=>'-',
        ]);
        DB::table('jugadores')->insert([
            'nombre' => 'Lucas Puoille',
            'pais'=>'Francia',
        ]);

    }
}
