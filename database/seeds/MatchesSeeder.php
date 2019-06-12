<?php

use Illuminate\Database\Seeder;

class MacthesSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

      DB::table('matches')->insert([
        'team1_id' => '1',
        'team2_id' => '2',
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '3',
        'team2_id' => '4',
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '5',
        'team2_id' => '6',
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '7',
        'team2_id' => '8',
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '9',
        'team2_id' => '10',
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '11',
        'team2_id' => '12',
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '13',
        'team2_id' => '14',
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '15',
        'team2_id' => '16',
        'ronda' => '16',
      ]);

    }
}
