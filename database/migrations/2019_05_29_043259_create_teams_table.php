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
        $equipo1 = new Team; $equipo1->name = "River";
        $equipo2 = new Team; $equipo2->name = "Cruzeiro";
        $equipo3 = new Team; $equipo3->name = "San Lorenzo";
        $equipo4 = new Team; $equipo4->name = "Cruzeiro";
        $equipo5 = new Team; $equipo5->name = "LDU Quito";
        $equipo6 = new Team; $equipo6->name = "Olimpia";
        $equipo7 = new Team; $equipo7->name = "Paranaense";
        $equipo8 = new Team; $equipo8->name = "Boca";
        $equipo9 = new Team; $equipo9->name = "Godoy Cruz";
        $equipo10 = new Team; $equipo10->name = "Palmeiras";
        $equipo11 = new Team; $equipo11->name = "Gremio";
        $equipo12 = new Team; $equipo12->name = "Libertad";
        $equipo13 = new Team; $equipo13->name = "Emelec";
        $equipo14 = new Team; $equipo14->name = "Flamengo";
        $equipo15 = new Team; $equipo15->name = "Nacional";
        $equipo16 = new Team; $equipo16->name = "Inter Porto Alegre";
        $equipo1->save();
        $equipo2->save();
        $equipo3->save();
        $equipo4->save();
        $equipo5->save();
        $equipo6->save();
        $equipo7->save();
        $equipo8->save();
        $equipo9->save();
        $equipo10->save();
        $equipo11->save();
        $equipo12->save();
        $equipo13->save();
        $equipo14->save();
        $equipo15->save();
        $equipo16->save();
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