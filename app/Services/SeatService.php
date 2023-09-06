<?php

namespace App\Services;

use App\Http\Requests\SeatRequest;
use App\Models\Seat;
use App\Models\CinemaHall;

class SeatService
{
    /**
     * Get all seats in the cinema hall.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllSeats(): \Illuminate\Database\Eloquent\Collection
    {
        return Seat::all();
    }

    /**
     * Save new seats in the database.
     *
     * @param \App\Http\Requests\SeatRequest $request
     * @return void
     */
    public function createSeats(SeatRequest $request): void
    {
        $validatedData = $request->validated();
        
        if (isset($validatedData['seats'])) {
            $cinemaHallId = $validatedData['seats'][0]['cinema_hall_id'];
            $cinemaHall = CinemaHall::findOrFail($cinemaHallId);
            
            Seat::whereCinemaHallId($cinemaHall->id)->delete();

            foreach ($validatedData['seats'] as $seatData) {
                Seat::create($seatData);
            }
        }
    }

    /**
     * Get a list of seats for the specified cinema hall.
     *
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getSeatsByCinemaHall($id): \Illuminate\Database\Eloquent\Collection
    {
        return Seat::where('cinema_hall_id', $id)->get();
    }

    /**
     * Update information for multiple seats in the database.
     *
     * @param \App\Http\Requests\SeatRequest $request
     * @return void
     */
    public function updateSeats(SeatRequest $request): void
    {
        $validatedData = $request->validated();
        
        if (isset($validatedData['seats'])) {
            foreach ($validatedData['seats'] as $seatData) {
                $cinemaSeat = Seat::findOrFail($seatData['id']);
                $cinemaSeat->fill($seatData);
                $cinemaSeat->save();
            }
        }
    }
}

