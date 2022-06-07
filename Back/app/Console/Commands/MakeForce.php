<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Force;

class MakeForce extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:force';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a force here';

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
        $name = $this->ask('Qual o nome da força?');
        $country_id = $this->ask('Qual o pais dessa força? (ID)');
        $number_tanks = $this->ask('Quantos tanques essa força tem?');

        Force::create([
            'name' => $name,
            'country_id' => $country_id,
            'number_tanks' => $number_tanks,
        ]);

        $this->info('Força gravada!');
    }
}
