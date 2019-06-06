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

        DB::table('attires')->insert([
            'type' => 'skin',
            'source' => 'Cara1'
        ]);
    }
}
