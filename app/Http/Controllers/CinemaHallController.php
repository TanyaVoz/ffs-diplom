<?php

namespace App\Http\Controllers;

use App\Http\Requests\CinemaHallRequest;
use App\Models\CinemaHall;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class CinemaHallController extends Controller
{
    /**
     * Display a list of cinema halls.
     */
    public function index(): JsonResponse
    {
         // Получение всех кинозалов из базы данных
        $cinemaHalls = CinemaHall::all();
      
        return response()->json($cinemaHalls);
    }

    /**
     * Store a newly created cinema hall.
     *
     * @param \App\Http\Requests\CinemaHallRequest $request
     * @return \App\Models\CinemaHall
     */
    public function store(CinemaHallRequest $request): CinemaHall
    {
        
        $validatedData = $request->validated();
        // Создание нового кинозала с использованием валидированных данных и сохранение в базе данных
        $cinemaHall = CinemaHall::create($validatedData);
        
        return $cinemaHall;
    }

    /**
     * Display information about the specified cinema hall.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        try {
           // Поиск кинозала с указанным идентификатором в базе данных
            $cinemaHall = CinemaHall::findOrFail($id);
            
            return response()->json($cinemaHall);
        } catch (\Exception $e) {
   // Возвращение JSON-ответа с сообщением об ошибке, если кинозал не найден
            return response()->json(['error' => 'Cinema hall not found.'], Response::HTTP_NOT_FOUND);
        }
    }

    /**
     * Update information about the specified cinema hall.
     *
     * @param \App\Http\Requests\CinemaHallRequest $request
     * @param \App\Models\CinemaHall $cinemaHall
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CinemaHallRequest $request, CinemaHall $cinemaHall): JsonResponse
    {
        // Проверка и валидация входных данных запроса
        $validatedData = $request->validated();
        
        $cinemaHall->fill($validatedData);

        if ($cinemaHall->save()) {
           
            return response()->json(['message' => 'Cinema hall updated successfully.']);
        } else {
             // Возвращение JSON-ответа с сообщением об ошибке, если обновление не удалось
            return response()->json(['error' => 'Failed to update cinema hall.'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified cinema hall.
     *
     * @param \App\Models\CinemaHall $cinemaHall
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(CinemaHall $cinemaHall): JsonResponse
    {
        try {
             // Удаление выбранного кинозала из базы данных
            $cinemaHall->delete();
           
            return response()->json(['message' => 'Cinema hall deleted successfully.']);
        } catch (\Exception $e) {
           // Возвращение JSON-ответа с сообщением об ошибке, если удаление не удалось
            return response()->json(['error' => 'Failed to delete cinema hall.'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

