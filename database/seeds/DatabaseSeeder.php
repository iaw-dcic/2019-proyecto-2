<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

     DB::table('teams')->insert([
        'name' => 'Milwaukee Bucks',
        'conference' => 'east',
     ]);

     DB::table('teams')->insert([
       'name' => 'Detroit Pistons',
       'conference' => 'east',
     ]);

     DB::table('teams')->insert([
       'name' => 'Boston Celtics',
       'conference' => 'east',
     ]);

     DB::table('teams')->insert([
       'name' => 'Indiana Pacers',
       'conference' => 'east',
     ]);

     DB::table('teams')->insert([
       'name' => 'Philadelphia 76ers',
       'conference' => 'east',
     ]);

     DB::table('teams')->insert([
       'name' => 'Brooklyn Nets',
       'conference' => 'east',
     ]);

     DB::table('teams')->insert([
       'name' => 'Toronto Raptors',
       'conference' => 'east',
     ]);

     DB::table('teams')->insert([
       'name' => 'Orlando Magic',
       'conference' => 'east',
     ]);

     DB::table('teams')->insert([
       'name' => 'Golden State',
       'conference' => 'west',
     ]);

     DB::table('teams')->insert([
       'name' => 'Los Angeles Clippers',
       'conference' => 'west',
     ]);

     DB::table('teams')->insert([
       'name' => 'Houston Rockets',
       'conference' => 'west',
     ]);

     DB::table('teams')->insert([
       'name' => 'Utah Jazz',
       'conference' => 'west',
     ]);

    DB::table('teams')->insert([
      'name' => 'Portland Trail Blazers',
      'conference' => 'west',
    ]);

    DB::table('teams')->insert([
      'name' => 'Oklahoma City Thunder',
      'conference' => 'west',
    ]);

    DB::table('teams')->insert([
      'name' => 'Denver Nuggets',
      'conference' => 'west',
    ]);

    DB::table('teams')->insert([
      'name' => 'San Antonio Spurs',
      'conference' => 'west',
    ]);

////matches

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
