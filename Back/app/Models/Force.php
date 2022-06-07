<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Force extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'winner',
        'country_id',
        'number_tanks',
        'winner',
    ];
}
