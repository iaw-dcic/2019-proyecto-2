<?php

use Illuminate\Database\Seeder;

class MatchesSeeder extends Seeder
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
        'team2_id' => '11',
        'num' => '1',
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '21',
        'team2_id' => '31',
        'num' => '2',
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '41',
        'team2_id' => '51',
        'ronda' => '16',
        'num' => '3',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '61',
        'team2_id' => '71',
        'ronda' => '16',
          'num' => '4',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '81',
        'team2_id' => '91',
        'ronda' => '16',
          'num' => '5',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '101',
        'team2_id' => '111',
        'ronda' => '16',
          'num' => '6',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '121',
        'team2_id' => '131',
        'ronda' => '16',
          'num' => '7',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '141',
        'team2_id' => '151',
        'ronda' => '16',
          'num' => '8',
      ]);

    }
}
