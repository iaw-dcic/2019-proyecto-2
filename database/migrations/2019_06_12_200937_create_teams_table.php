<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('team_name');
            $table->string('icon_name');
        });

        // Insert some stuff
        DB::table('teams')->insert(
            array(
                'team_name' => 'Bucks',
                'icon_name' => 'Bucks.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Raptors',
                'icon_name' => 'Raptors.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => '76ers',
                'icon_name' => '76ers.png'
            )
        );
        
        DB::table('teams')->insert(
            array(
                'team_name' => 'Celtics',
                'icon_name' => 'Celtics.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Pacers',
                'icon_name' => 'Pacers.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Nets',
                'icon_name' => 'Nets.png'
            )
        );
        
        DB::table('teams')->insert(
            array(
                'team_name' => 'Magic',
                'icon_name' => 'Magic.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Pistons',
                'icon_name' => 'Pistons.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Warriors',
                'icon_name' => 'Warriors.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Nuggets',
                'icon_name' => 'Nuggets.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Trail Blazers',
                'icon_name' => 'Trail Blazers.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Rockets',
                'icon_name' => 'Rockets.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Jazz',
                'icon_name' => 'Jazz.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Thunder',
                'icon_name' => 'Thunder.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Spurs',
                'icon_name' => 'Spurs.png'
            )
        );

        DB::table('teams')->insert(
            array(
                'team_name' => 'Clippers',
                'icon_name' => 'Clippers.png'
            )
        );

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teams');
    }
}
