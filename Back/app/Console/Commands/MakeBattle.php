<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Battle;

class MakeBattle extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:battle';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create the battle here';

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
        $name = $this->ask('Qual o nome da batalha?');
        $front_id = $this->ask('Qual o front em que essa batalha acontece? (ID)');
        $count = $this->ask('Quantas forças vãso participar?');
        $i = 0;
        while($i != $count && $count > 1){
            $forces_id = $this->ask('Qual a força?(ID)');
            $i++;
            Battle::Create([
                'name' => $name,
                'front_id' => $front_id,
                'forces_id' => $forces_id,
            ]);
        }

        $this->info('YAAAAAAA!');
        $this->info(Battle::all());
    }
}
