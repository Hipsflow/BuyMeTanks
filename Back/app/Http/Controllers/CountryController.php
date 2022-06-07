<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use App\Http\Requests\CountryRequest;

class CountryController extends Controller
{

    public function index()
    {
        return Country::all();
    }

    public function store(CountryRequest $request)
    {
        $country = Country::create($request->all());

        $country->refresh();
        return $country;
    }

    public function show(Country $country)
    {
        return $country;
    }

    public function update(CountryRequest $request, Country $country)
    {
        $country->fill($request->all());
        $country->save();

        return $country;    
    }

    public function destroy(Country $country)
    {
        $country->delete();
        return response()->json([], 204);
    }
}
