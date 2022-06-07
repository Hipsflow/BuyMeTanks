<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

class FrontCountry extends Model
{
    use HasFactory;

    protected $fillable = [
        'country_id',
        'front_id'
    ];

    public static function getFrontsCountries(){
        $front = DB::select(DB::raw("
        SELECT
            countries.name,
            countries.id,
            fronts.name as frontName,
            fronts.id as frontId
        FROM
            public.front_countries join
            public.countries on front_countries.country_id = countries.id join
            public.fronts on front_countries.front_id = fronts.id
        "));
        return $front;
    }
}
