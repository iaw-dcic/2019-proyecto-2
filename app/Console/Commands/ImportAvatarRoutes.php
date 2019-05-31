<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportAvatarRoutes extends Command {
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:avatarRoutes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import the .sql file with the routes for the elements of the avatar.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct () {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle () {
        DB::unprepared(file_get_contents('database/migrations/avatarRoutes.sql'));
    }
}
