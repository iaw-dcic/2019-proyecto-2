<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Team;

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
            $table->timestamps();
            $table->string('name');
        });

        $team1 = new Team;
        $team1->name = "Warriors";
        $team1->save();
        $team2 = new Team;
        $team2->name = "Nuggets";
        $team2->save();
        $team3 = new Team;
        $team3->name = "Trail Blazers";
        $team3->save();
        $team4 = new Team;
        $team4->name = "Rockets";
        $team4->save();
        $team5 = new Team;
        $team5->name = "Jazz";
        $team5->save();
        $team6 = new Team;
        $team6->name = "Thunder";
        $team6->save();
        $team7 = new Team;
        $team7->name = "Spurs";
        $team7->save();
        $team8 = new Team;
        $team8->name = "Clippers";
        $team8->save();
        $team9 = new Team;
        $team9->name = "Bucks";
        $team9->save();
        $team10 = new Team;
        $team10->name = "Raptors";
        $team10->save();
        $team11 = new Team;
        $team11->name = "76ers";
        $team11->save();
        $team12 = new Team;
        $team12->name = "Celtics";
        $team12->save();
        $team13 = new Team;
        $team13->name = "Pacers";
        $team13->save();
        $team14 = new Team;
        $team14->name = "Nets";
        $team14->save();
        $team15 = new Team;
        $team15->name = "Magic";
        $team15->save();
        $team16 = new Team;
        $team16->name = "Pistons";
        $team16->save();
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
