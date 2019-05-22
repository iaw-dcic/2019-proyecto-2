<?php

use Illuminate\Database\Seeder;

class PartidoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('partidos')->insert([
            'jugador_uno_id' => '1',
            'jugador_dos_id'=> '56',  
            'resultado'=>'1',
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '26',        //kohlschreiber
            'jugador_dos_id'=> '27',
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '54',        //kohlschreiber
            'jugador_dos_id'=> '53',
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '25',
            'jugador_dos_id'=> '16',        //cecchinato
            'ronda'=>'64',
        ]);
       
        DB::table('partidos')->insert([
            'jugador_uno_id' => '12',
            'jugador_dos_id'=> '44',       //krygios
            'ronda'=>'64',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '28',    //ruud
            'jugador_dos_id'=> '29', 
            'ronda'=>'64',
        ]); 
        DB::table('partidos')->insert([ 
            'jugador_uno_id' => '45',   //goffin
            'jugador_dos_id'=> '46',
            'ronda'=>'64',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '7',      //delpo
            'jugador_dos_id'=> '56',
            'resultado'=>'1',
            'ronda'=>'64',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '4',     //a. zverev
            'jugador_dos_id'=> '56',
            'resultado'=>'1',
            'ronda'=>'64',
        ]);

        DB::table('partidos')->insert([ 
            'jugador_uno_id' => '38',       //berretini
            'jugador_dos_id'=> '57',
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '42',        //peque
            'jugador_dos_id'=> '43',
            'ronda'=>'64',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '24',
            'jugador_dos_id'=> '15',      //monfils
            'ronda'=>'64',
        ]);
        
        DB::table('partidos')->insert([
            'jugador_uno_id' => '9',      //cilic
            'jugador_dos_id'=> '39',
            'ronda'=>'64',
        ]);
        
        DB::table('partidos')->insert([
            'jugador_uno_id' => '36',   //dimitrov
            'jugador_dos_id'=> '37',
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '49',
            'jugador_dos_id'=> '50',    //pella
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '6',    //nishikori
            'jugador_dos_id'=> '56',
            'resultado'=>'1',
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '8',    //tsitispas
            'jugador_dos_id'=> '56',
            'resultado'=>'1',
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '52',   //j sinner
            'jugador_dos_id'=> '51',
            'ronda'=>'64',
        ]);
        
        
        DB::table('partidos')->insert([
            'jugador_uno_id' => '47',   //albot
            'jugador_dos_id'=> '48',
            'ronda'=>'64',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '19',
            'jugador_dos_id'=> '10',      //fognini
            'ronda'=>'64',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '13',     //coric
            'jugador_dos_id'=> '35',
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '22',
            'jugador_dos_id'=> '23',      //norrie
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '40',
            'jugador_dos_id'=> '41',     //sousa
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '3',      //roger
            'jugador_dos_id'=> '56',
            'resultado'=>'1',
            'ronda'=>'64',
        ]);
        
        DB::table('partidos')->insert([
            'jugador_uno_id' => '5',      //thiem
            'jugador_dos_id'=> '56',
            'resultado'=>'1',
            'ronda'=>'64',
        ]);
     
        DB::table('partidos')->insert([
            'jugador_uno_id' => '33',  //verdasco
            'jugador_dos_id'=> '34',
            'ronda'=>'64',
        ]);
     
        DB::table('partidos')->insert([
            'jugador_uno_id' => '20',   //bautista augut
            'jugador_dos_id'=> '21',
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '30',
            'jugador_dos_id'=> '11',   //kachanov
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '55',
            'jugador_dos_id'=> '14',   //basilashivil
            'ronda'=>'64',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '31',
            'jugador_dos_id'=> '32',   //djere
            'ronda'=>'64', 
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '18',   //gasquet
            'jugador_dos_id'=> '17',
            'ronda'=>'64',
        ]);
    
       
        DB::table('partidos')->insert([
            'jugador_uno_id' => '2',
            'jugador_dos_id'=> '56',
            'resultado'=>'1',
            'ronda'=>'64',
        ]);
 
     
   
       
    }
}
