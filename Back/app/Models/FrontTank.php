<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

class FrontTank extends Model
{
    use HasFactory;

    protected $fillable = [
        'tank_id',
        'front_id'
    ];
    public static function getFrontsTanks(){
        $front = DB::select(DB::raw("
        SELECT
            fronts.name as frontName,
            tanks.name,
            tanks.id as tankId,
            fronts.id as frontId
        FROM
            public.front_tanks join
            public.tanks on front_tanks.tank_id = tanks.id join
            public.fronts on front_tanks.front_id = fronts.id
        "));
        return $front;
    }
}
