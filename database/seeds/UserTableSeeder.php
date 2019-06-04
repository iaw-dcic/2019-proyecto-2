<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $user = new User();
        $user->name = "admin";
        $user->email = "admin@proy2.com";
        $user->password = bcrypt('enterenter');
        $user->save();
    }
}
