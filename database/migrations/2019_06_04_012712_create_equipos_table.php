<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\Equipos;

class CreateEquiposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->timestamps();
        });

        $equipo1 = new Equipos;
        $equipo1->name = 'River';
        $equipo2 = new Equipos;
        $equipo2->name = 'Boca';
        $equipo3 = new Equipos;
        $equipo3->name = 'Banfield';
        $equipo4 = new Equipos;
        $equipo4->name = 'Belgrano';
        $equipo5 = new Equipos;
        $equipo5->name = 'Colón';
        $equipo6 = new Equipos;
        $equipo6->name = 'Huracán';
        $equipo7 = new Equipos;
        $equipo7->name = 'Independiente';
        $equipo8 = new Equipos;
        $equipo8->name = 'Lanús';
        $equipo9 = new Equipos;
        $equipo9->name = 'Racing';
        $equipo10 = new Equipos;
        $equipo10->name = 'San Lorenzo';
        $equipo11 = new Equipos;
        $equipo11->name = 'Tigre';
        $equipo12 = new Equipos;
        $equipo12->name = 'Unión';
        $equipo13 = new Equipos;
        $equipo13->name = 'Vélez';
        $equipo14 = new Equipos;
        $equipo14->name = 'Newells';
        $equipo15 = new Equipos;
        $equipo15->name = 'Estudiantes';
        $equipo16 = new Equipos;
        $equipo16->name = 'Godoy Cruz';

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
        Schema::dropIfExists('equipos');
    }
}
