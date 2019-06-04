<?php

use Illuminate\Database\Seeder;

class ImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('images')->insert(['src' => '/storage/uploads/note.png']);
        DB::table('images')->insert(['src' => '/storage/uploads/lightbulb.png']);
        DB::table('images')->insert(['src' => '/storage/uploads/pin.png']);
        DB::table('images')->insert(['src' => '/storage/uploads/lis_flower.png']);
    }
}
