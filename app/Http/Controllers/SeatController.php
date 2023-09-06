<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatRequest;
use App\Services\SeatService;
use Illuminate\Http\JsonResponse;

class SeatController extends Controller
{
    protected $seatService;

    public function __construct(SeatService $seatService)
    {
        $this->seatService = $seatService;
    }

    /**
     * Display a list of all seats in a cinema hall.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(): JsonResponse
    {
        $seats = $this->seatService->getAllSeats();

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
        $this->seatService->createSeats($request);

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
        $seats = $this->seatService->getSeatsByCinemaHall($id);

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
        $this->seatService->updateSeats($request);

        return response()->json(['success' => true], 200);
    }
}
