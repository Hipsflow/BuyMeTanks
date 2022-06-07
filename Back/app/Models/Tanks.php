<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

class Tanks extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'production_start',
        'production_ended',
        'class',
        'country_id',
    ];

    public static function getTank(){
        $tank = DB::select(DB::raw("
        SELECT 
        tanks.id,
        tanks.name,
        tanks.production_start,
        tanks.production_ended,
        tanks.class,
        countries.name as countries_name,
        countries.id as countries_id
    FROM
        public.tanks
    join
        public.countries on tanks.country_id = countries.id
        
        "));
        return $tank;
    }

}
