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
        'team2_id' => '2', //11
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '3', //21
        'team2_id' => '4', //31
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '5', //41
        'team2_id' => '6', //51
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '7', //61
        'team2_id' => '8', //71
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '9', //81
        'team2_id' => '10', //91
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '11', //101
        'team2_id' => '12', //111
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '13', //121
        'team2_id' => '14', //131
        'ronda' => '16',
      ]);

      DB::table('matches')->insert([
        'team1_id' => '15', //141
        'team2_id' => '16', //151
        'ronda' => '16',
      ]);

    }
}
