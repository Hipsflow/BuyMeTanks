<?php

namespace App\Http\Controllers;

use App\Models\Front;
use Illuminate\Http\Request;
use App\Http\Requests\FrontRequest;
use JasperPHP\JasperPHP;

class FrontController extends Controller
{
    public function index()
    {
        return Front::all();
    }

    public function store(FrontRequest $request)
    {
        $front = Front::create($request->all());

        $front->refresh();
        return $front;
    }

    public function show(Front $front)
    {
        return $front;
    }

    public function update(FrontRequest $request, Front $front)
    {
        $front->fill($request->all());
        $front->save();
        $front->refresh();

        return $front;
    }

    public function destroy(Front $front)
    {
        $front->delete();
        return response()->json(["aaaa"], 204);
    }
    public function getFront(){
        return Front::getFronts();
    }

}
