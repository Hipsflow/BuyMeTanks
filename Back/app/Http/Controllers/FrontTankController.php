<?php

namespace App\Http\Controllers;

use App\Models\FrontTank;
use Illuminate\Http\Request;

class FrontTankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FrontTank::getFrontsTanks();
    }

    public function store(Request $request)
    {
        $frontTank = FrontTank::create($request->all());

        $frontTank->refresh();
        return $frontTank;
    }

    public function show(FrontTank $frontTank)
    {
        return $frontTank;
    }

    public function update(Request $request, FrontTank $frontTank)
    {
        return $request;
        $frontTank->fill($request->all());
        $frontTank->save();
        $frontTank->refresh();

        return $frontTank;
    }

    public function destroy(FrontTank $frontTank)
    {
        $frontTank->delete();
        return response()->json([], 204);
    }
    // public function getFront(){
    //     return Front::getFront();
    // }
}
