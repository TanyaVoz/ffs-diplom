<?php

namespace App\Http\Controllers;

use App\Http\Requests\CinemaHallRequest;
use App\Models\CinemaHall;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class CinemaHallController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(CinemaHall::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\CinemaHallRequest $request
     * @return \App\Models\CinemaHall
     */
    public function store(CinemaHallRequest $request): CinemaHall
    {
        return CinemaHall::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id): Response
    {
        return CinemaHall::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\CinemaHallRequest $request
     * @param \App\Models\CinemaHall $cinemaHall
     * @return bool
     */
    public function update(CinemaHallRequest $request, CinemaHall $cinemaHall): bool
    {
        $cinemaHall->fill($request->validated());
        return $cinemaHall->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\CinemaHall $cinemaHall
     * @return \Illuminate\Http\Response
     */
    public function destroy(CinemaHall $cinemaHall): Response
    {
        if ($cinemaHall->delete()) {
            return response(null, Response::HTTP_NO_CONTENT);
        }
        return response()->json(['error' => 'Failed to delete cinema hall.'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
