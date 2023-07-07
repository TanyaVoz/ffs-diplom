<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatRequest;
use App\Models\Seat;
use App\Models\CinemaHall;
use Illuminate\Http\Response;

class SeatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Seat::all();
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   
    public function store(SeatRequest $request)
    {
        //
        foreach ($request->validated()['seats'] as $seat)
        {
            Seat::create($seat);
        }
        return response(true, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Seat  $seat
     * @return \Illuminate\Http\Response
     */
  
    public function show($id)
    {
        
        return Seat::where('cinema_hall_id', $id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Seat  $seat
     * @return \Illuminate\Http\Response
     */
   
    public function updateMany(SeatRequest $request)
    {
       
        foreach ($request->validated()['seats'] as $seat)
        {
            $place = Seat::findOfFail($seat['id']);
            $place->fill($seat);
            $place->save();
        }
        return response(true, 201);
    }
}