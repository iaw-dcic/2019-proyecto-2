<?php

use Illuminate\Database\Seeder;

class TeamsSeeder extends Seeder
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

  }}
