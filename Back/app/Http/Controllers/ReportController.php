<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use PHPJasper\PHPJasper;

class ReportController extends Controller
{
/**
     * Reporna um array com os parametros de conexão
     * @return Array
     */

    public function __construct() {

        $this->pathInput = public_path() . '/reports/base';
        $this->pathOutput = public_path() . '/reports/gerados/';

    }

    public function getDatabaseConfig()
    {
        return [
            'driver'   => 'postgres',
            'host'     => env('DB_HOST'),
            'port'     => env('DB_PORT'),
            'username' => env('DB_USERNAME'),
            'password' => env('DB_PASSWORD'),
            'database' => env('DB_DATABASE'),
            // 'jdbc_dir' => base_path() . ('JDBC_DIR', '/vendor/lavela/phpjasper/src/JasperStarter/jdbc'),
        ];
    }
    public function makereport()
    {
        $output = $this->pathOutput . '_butmetanksReportMAIN' . '.pdf';
        $input = $this->pathInput . '/' . 'butmetanksReportMAIN' . '.jrxml';
//aaaaaaaaaaaaaaaaaaaaa
        $report = new PHPJasper;
        $report->process(
            $input,            
            $output,
            [
                'db_connection' => $this->getDatabaseConfig(),
            ]        
        )->execute();

        $file = $output;
        $path = $file;

        if (!file_exists($file)) {
            abort(404);
        }

        return $file;
    }
}
