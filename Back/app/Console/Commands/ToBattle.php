<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Battle;

class ToBattle extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'do:battle';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $battle_id = Battle::find($battle_id);
        $battle = Battle::StartBattle($battle_id);
        print_r($battle);
    }
}
