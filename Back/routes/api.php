<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TanksController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\FrontTankController;
use App\Http\Controllers\FrontCountryController;
use App\Http\Controllers\ReportController;
use JasperPHP\JasperPHP;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
    
});

route::group(['namespace' => 'Api', 'as' => 'api.'],function(){
});
Route::resource('countries', CountryController::class);
Route::resource('tanks', TanksController::class);
Route::resource('fronts', FrontController::class);
Route::resource('frontsTanks', FrontTankController::class);
Route::resource('frontsCountries', FrontCountryController::class);
Route::get('allfronts', [FrontController::class,'getFront']);
Route::get('frontreports', [FrontController::class,'generateReport']);
Route::get('reports',[ReportController::class,'getDatabaseConfig']);
Route::get('makereport',[ReportController::class,'makereport']);