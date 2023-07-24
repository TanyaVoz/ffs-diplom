<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatRequest;
use App\Models\Seat;
use App\Models\CinemaHall;
use App\Models\Session;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;

class SeatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(): Collection
    {
        return Seat::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\SeatRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(SeatRequest $request): JsonResponse
    {
        $req = $request->validated();
        
        if (isset($req['seats'])) {
            $cinemaHallId = $req['seats'][0]['cinema_hall_id'];
            $cinemaHall = CinemaHall::findOrFail($cinemaHallId);
            Seat::whereCinemaHallId($cinemaHall->id)->delete();
            Session::whereCinemaHallId($cinemaHall->id)->delete();

            foreach ($req['seats'] as $seat) {
                Seat::create($seat);
            }
        }

        return response()->json(true, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function show($id): Collection
    {
        return Seat::where('cinema_hall_id', $id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\SeatRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateMany(SeatRequest $request): JsonResponse
    {
        $req = $request->validated();
        
        if (isset($req['seats'])) {
            foreach ($req['seats'] as $seat) {
                $cinemaSeat = Seat::findOrFail($seat['id']);
                $cinemaSeat->fill($seat);
                $cinemaSeat->save();
            }
        }

        return response()->json(true, 201);
    }
}