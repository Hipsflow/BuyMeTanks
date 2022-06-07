<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Battle extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'front_id',
        'forces_id',
    ];

    public static function StartBattle($battle_id)
    {
        $battle = self::find($battle_id);
        $battle_forces = $battle->forces;

        $number_tanks = 0;
        foreach ($battle_forces as $battle_forces){
            if($battle_forces->force->number_tanks > $number_tanks){
                print_r('Naosei');
            }
        }
    }
}
