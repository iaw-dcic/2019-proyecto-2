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

        $equipo1 = new Team;
        $equipo1->name = 'Lanus';
        $equipo2 = new Team;
        $equipo2->name = 'Velez';
        $equipo3 = new Team;
        $equipo3->name = 'Godoy Cruz';
        $equipo4 = new Team;
        $equipo4->name = 'Boca';
        $equipo5 = new Team;
        $equipo5->name = 'Argentinos';
        $equipo6 = new Team;
        $equipo6->name = 'San Lorenzo';
        $equipo7 = new Team;
        $equipo7->name = 'Gimnasia';
        $equipo8 = new Team;
        $equipo8->name = 'DyJ';
        $equipo9 = new Team;
        $equipo9->name = 'Estudiantes';
        $equipo10 = new Team;
        $equipo10->name = 'Racing';
        $equipo11 = new Team;
        $equipo11->name = 'Tigre';
        $equipo12 = new Team;
        $equipo12->name = 'Union';
        $equipo13 = new Team;
        $equipo13->name = 'Talleres';
        $equipo14 = new Team;
        $equipo14->name = 'ATU';
        $equipo15 = new Team;
        $equipo15->name = 'Aldosivil';
        $equipo16 = new Team;
        $equipo16->name = 'River';
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