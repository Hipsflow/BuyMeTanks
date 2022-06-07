<?php

namespace App\Http\Controllers;

use App\Models\FrontCountry;
use Illuminate\Http\Request;

class FrontCountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FrontCountry::getFrontsCountries();
    }

    public function store(Request $request)
    {
        $frontCountry = FrontCountry::create($request->all());

        $frontCountry->refresh();
        return $frontCountry;
    }

    public function show(FrontCountry $frontCountry)
    {
        return $frontCountry;
    }

    public function update(Request $request, FrontCountry $frontCountry)
    {
        return $request;
        $frontCountry->fill($request->all());
        $frontCountry->save();
        $frontCountry->refresh();

        return $frontCountry;
    }

    public function destroy(FrontCountry $frontCountry)
    {
        $frontCountry->delete();
        return response()->json([], 204);
    }
    // public function getFront(){
    //     return Front::getFront();
    // }
}
