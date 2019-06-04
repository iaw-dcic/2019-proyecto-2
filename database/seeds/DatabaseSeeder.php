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
        $this->truncateTable([
            'teams',
        ]);

        // $this->call(UsersTableSeeder::class);
        //Registro el seeder UserSeeder
        $this->call(TeamSeeder::class);
    }

    /**Me va a permitir vaciar la tabla para que no haya errores.
     * Para vaciar la tabla tengo que desactivar momentaneamente la revision de claves foráneas.
     * array con el nombre de las tablas que se quiere vaciar.
     */
    protected function truncateTable(array $tables){

    }

}
