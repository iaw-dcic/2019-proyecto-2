<?php

use Illuminate\Database\Seeder;

class avatarDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Caras = array('Cara1', 'Cara2', 'Cara3', 'Cara4');
        $Pelos = array('Pelo1', 'Pelo2', 'Pelo3', 'Pelo4');
        $Ojos = array('Ojos1','Ojos2','Ojos3','Ojos4');
        $Bocas = array('Boca1','Boca2','Boca3','Boca4');
        for($i = 0; $i < 4; $i++){
            DB::table('attires')->insert([
                'type' => 'skin',
                'source' => $Caras[$i]
            ]);
            DB::table('attires')->insert([
                'type' => 'hair',
                'source' => $Pelos[$i]
            ]);
            DB::table('attires')->insert([
                'type' => 'eyes',
                'source' => $Ojos[$i]
            ]);
            DB::table('attires')->insert([
                'type' => 'mouth',
                'source' => $Bocas[$i]
            ]);
        }

    }
}
