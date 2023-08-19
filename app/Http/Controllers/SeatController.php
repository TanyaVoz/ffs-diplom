<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatRequest;
use App\Models\Seat;
use App\Models\CinemaHall;
use Illuminate\Http\JsonResponse;

class SeatController extends Controller
{
    /**
     * Display a list of all seats in a cinema hall.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(): JsonResponse
    {
         // Получение всех мест из модели Seat
        $seats = Seat::all();

        return response()->json($seats, 200);
    }

    /**
     * Store new seats in the database.
     *
     * @param \App\Http\Requests\SeatRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(SeatRequest $request): JsonResponse
    {
        // Проверка входных данных запроса с использованием правил валидации из SeatRequest
        $validatedData = $request->validated();
        
        if (isset($validatedData['seats'])) {
            // Получение ID кинозала из данных первого места
            $cinemaHallId = $validatedData['seats'][0]['cinema_hall_id'];
            $cinemaHall = CinemaHall::findOrFail($cinemaHallId);
            
            Seat::whereCinemaHallId($cinemaHall->id)->delete();

            // Перебор данных каждого места и создание нового экземпляра модели Seat
            foreach ($validatedData['seats'] as $seatData) {
                Seat::create($seatData);
            }
        }

        return response()->json(['success' => true], 201);
    }

    /**
     * Display a list of seats for the specified cinema hall.
     *
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function show($id): JsonResponse
    {
        // Получение мест, принадлежащих указанному ID кинозала
        $seats = Seat::where('cinema_hall_id', $id)->get();

        return response()->json($seats, 200);
    }

    /**
     * Update information for multiple seats in the database.
     *
     * @param \App\Http\Requests\SeatRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateMany(SeatRequest $request): JsonResponse
    {
        // Проверка входных данных запроса с использованием правил валидации из SeatRequest
        $validatedData = $request->validated();
        
        if (isset($validatedData['seats'])) {
            foreach ($validatedData['seats'] as $seatData) {
                $cinemaSeat = Seat::findOrFail($seatData['id']);
                $cinemaSeat->fill($seatData);
                $cinemaSeat->save();
            }
        }

         // Возврат успешного ответа с кодом статуса 200
        return response()->json(['success' => true], 200);
    }
}
