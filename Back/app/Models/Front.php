<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;


class Front extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'year_begin',
        'year_end',
        'id_tank',
        'countryname',
        'tankname'
    ];

    public static function getFronts(){
        $front = DB::select(DB::raw("
            SELECT
                fronts.name as frontName,
                fronts.year_begin,
                fronts.year_end,
                fronts.id,
                front_tanks.id as frontTankId,
                front_countries.id as frontCountryId,
                countries.name as countryname,
                tanks.name as tankname
            
            FROM
                public.fronts
                join public.front_countries on fronts.id = front_countries.front_id
                join public.countries on countries.id = front_countries.country_id
                join public.front_tanks on fronts.id = front_tanks.front_id
                join public.tanks on tanks.id = front_tanks.tank_id
        "));
        return $front;
    }
}
 