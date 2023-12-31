<?php

namespace App\Services;

use App\Http\Requests\CinemaHallRequest;
use App\Models\CinemaHall;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class CinemaHallService
{
    public function getAllCinemaHalls(): JsonResponse
    {
        $cinemaHalls = CinemaHall::all();
        return response()->json($cinemaHalls);
    }

    public function createCinemaHall(CinemaHallRequest $request): CinemaHall
    {
        $validatedData = $request->validated();
        $cinemaHall = CinemaHall::create($validatedData);
        return $cinemaHall;
    }

    public function getCinemaHallById(int $id): JsonResponse
    {
        try {
            $cinemaHall = CinemaHall::findOrFail($id);
            return response()->json($cinemaHall);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Cinema hall not found.'], Response::HTTP_NOT_FOUND);
        }
    }

    public function updateCinemaHall(CinemaHallRequest $request, CinemaHall $cinemaHall): JsonResponse
    {
        $validatedData = $request->validated();
        $cinemaHall->fill($validatedData);

        if ($cinemaHall->save()) {
            return response()->json(['message' => 'Cinema hall updated successfully.']);
        } else {
            return response()->json(['error' => 'Invalid data provided for cinema hall update.'], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function deleteCinemaHall(CinemaHall $cinemaHall): JsonResponse
    {
        try {
            $cinemaHall->delete();
            return response()->json(['message' => 'Cinema hall deleted successfully.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Invalid request: The cinema hall could not be deleted.'], Response::HTTP_BAD_REQUEST);
        }
    }
}
