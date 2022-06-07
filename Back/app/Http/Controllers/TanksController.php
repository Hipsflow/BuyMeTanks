<?php

namespace App\Http\Controllers;

use App\Models\Tanks;
use Illuminate\Http\Request;
use App\Http\Requests\TankRequest;

class TanksController extends Controller
{
    public function index()
    {
        return Tanks::getTank();
    }

    public function store(TankRequest $request)
    {
        $tank = Tanks::create($request->all());

        $tank->refresh();
        return $tank;
    }

    public function show(Tanks $tank)
    {
        return $tank;
    }

    public function update(TankRequest $request, Tanks $tank)
    {
        $tank->fill($request->all());
        $tank->save();

        return $tank;
    }

    public function destroy(Tanks $tank)
    {
        $tank->delete();
        return response()->json([], 204);    
    }
}
