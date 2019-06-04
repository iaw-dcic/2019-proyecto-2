<?php

use Illuminate\Database\Seeder;

class PrimeraRondaSeeder extends Seeder
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
            'jugador_dos_id'=> '551',  
            'resultado'=>'1',
            'ronda'=>'32',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '251',        
            'jugador_dos_id'=> '261',//shapavalov
            'resultado'=>'2',
            'ronda'=>'32',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '531',        //kohlschreiber
            'jugador_dos_id'=> '521',
            'resultado'=>'1',
            'ronda'=>'32',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '241',
            'jugador_dos_id'=> '151',        //cecchinato
            'ronda'=>'32',
            'resultado'=>'2',
        ]);
       
        DB::table('partidos')->insert([
            'jugador_uno_id' => '111',
            'jugador_dos_id'=> '431',       //krygios
            'ronda'=>'32',
            'resultado'=>'2',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '271',    //ruud
            'jugador_dos_id'=> '281', 
            'ronda'=>'32',
            'resultado'=>'1',
        ]); 
        DB::table('partidos')->insert([ 
            'jugador_uno_id' => '441',   //goffin
            'jugador_dos_id'=> '451',
            'ronda'=>'32',
            'resultado'=>'1',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '61',      //delpo
            'jugador_dos_id'=> '551',
            'resultado'=>'1',
            'ronda'=>'32',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '31',     //a. zverev
            'jugador_dos_id'=> '551',
            'resultado'=>'1',
            'ronda'=>'32',
        ]);

        DB::table('partidos')->insert([ 
            'jugador_uno_id' => '371',       //berretini
            'jugador_dos_id'=> '561', //pouille
            'ronda'=>'32',
            'resultado'=>'1',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '411',        //peque
            'jugador_dos_id'=> '421',
            'ronda'=>'32',
            'resultado'=>'1',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '231', //ramos
            'jugador_dos_id'=> '141',      //monfils
            'ronda'=>'32',
        'resultado'=>'1',

        ]);
        
        DB::table('partidos')->insert([
            'jugador_uno_id' => '81',      //cilic
            'jugador_dos_id'=> '381', //baso
            'ronda'=>'32',
             'resultado'=>'2',
            
        ]);
        
        DB::table('partidos')->insert([
            'jugador_uno_id' => '351',   //dimitrov
            'jugador_dos_id'=> '361', //struff
            'resultado'=>'2',
            'ronda'=>'32',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '481',
            'jugador_dos_id'=> '491',    //pella
            'ronda'=>'32',
            'resultado'=>'1',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '51',    //nishikori
            'jugador_dos_id'=> '551',
            'resultado'=>'1',
            'ronda'=>'32',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '71',    //tsitispas
            'jugador_dos_id'=> '551',
            'resultado'=>'1',
            'ronda'=>'32',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '511',   //j sinner
            'jugador_dos_id'=> '501',
            'ronda'=>'32',
            'resultado'=>'1',
        ]);
        
        
        DB::table('partidos')->insert([
            'jugador_uno_id' => '461',   //albot
            'jugador_dos_id'=> '471',
            'ronda'=>'32',
            'resultado'=>'1',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '181',
            'jugador_dos_id'=> '91',      //fognini
            'ronda'=>'32',
            'resultado'=>'1',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '121',     //coric
            'jugador_dos_id'=> '341',
            'ronda'=>'32',
            'resultado'=>'1',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '211',
            'jugador_dos_id'=> '221',      //norrie
            'ronda'=>'32',
            'resultado'=>'2',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '391',
            'jugador_dos_id'=> '401',     //sousa
            'ronda'=>'32',
            'resultado'=>'2',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '21',      //roger
            'jugador_dos_id'=> '551',
            'resultado'=>'1',
            'ronda'=>'32',
        ]);
        
        DB::table('partidos')->insert([
            'jugador_uno_id' => '41',      //thiem
            'jugador_dos_id'=> '551',
            'resultado'=>'1',
            'ronda'=>'32',
        ]);
     
        DB::table('partidos')->insert([
            'jugador_uno_id' => '321',  //verdasco
            'jugador_dos_id'=> '331',
            'ronda'=>'32',
            'resultado'=>'1',
        ]);
     
        DB::table('partidos')->insert([
            'jugador_uno_id' => '191',   //bautista augut
            'jugador_dos_id'=> '201',
            'ronda'=>'32',
            'resultado'=>'1',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '291',
            'jugador_dos_id'=> '101',   //kachanov
            'ronda'=>'32',
            'resultado'=>'2',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '541',
            'jugador_dos_id'=> '131',   //basilashivil
            'ronda'=>'32',
            'resultado'=>'2',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '301',
            'jugador_dos_id'=> '311',   //djere
            'ronda'=>'32', 
            'resultado'=>'2',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '161',   //gasquet
            'jugador_dos_id'=> '171',
            'ronda'=>'32',
        ]);
    
       
        DB::table('partidos')->insert([
            'jugador_uno_id' => '11',
            'jugador_dos_id'=> '551',
            'resultado'=>'1',
            'ronda'=>'32',
        ]);
 
     
   
       
    }
}
