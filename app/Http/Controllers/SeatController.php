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
     * Отображение списка всех мест в кинозале.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(): Collection
    {
        // Получение всех мест из базы данных и возврат их в виде коллекции.
        return Seat::all();
    }

    /**
     * Сохранение новых мест в базе данных.
     *
     * @param \App\Http\Requests\SeatRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(SeatRequest $request): JsonResponse
    {
        // Проверка и валидация данных из запроса.
        $req = $request->validated();
        
        // Проверка наличия данных о местах в запросе.
        if (isset($req['seats'])) {
            // Получение ID кинозала из первого элемента данных о месте.
            $cinemaHallId = $req['seats'][0]['cinema_hall_id'];
            
            // Поиск кинозала по указанному ID или выброс исключения, если кинозал не найден.
            $cinemaHall = CinemaHall::findOrFail($cinemaHallId);
            
            // Удаление всех существующих мест и сеансов, связанных с данным кинозалом.
            Seat::whereCinemaHallId($cinemaHall->id)->delete();
            Session::whereCinemaHallId($cinemaHall->id)->delete();

            // Создание новых мест на основе полученных данных.
            foreach ($req['seats'] as $seat) {
                Seat::create($seat);
            }
        }

        // Возврат JSON-ответа с указанием успешного выполнения (true) и кодом состояния HTTP 201 (Создано).
        return response()->json(true, 201);
    }

    /**
     * Отображение списка мест для указанного кинозала.
     *
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function show($id): Collection
    {
        // Получение всех мест, связанных с указанным ID кинозала, и возврат их в виде коллекции.
        return Seat::where('cinema_hall_id', $id)->get();
    }

    /**
     * Обновление информации о нескольких местах в базе данных.
     *
     * @param \App\Http\Requests\SeatRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateMany(SeatRequest $request): JsonResponse
    {
        // Проверка и валидация данных из запроса.
        $req = $request->validated();
        
        // Проверка наличия данных о местах в запросе.
        if (isset($req['seats'])) {
            // Итерация по полученным местам и обновление каждого из них в базе данных.
            foreach ($req['seats'] as $seat) {
                // Поиск места по указанному ID или выброс исключения, если место не найдено.
                $cinemaSeat = Seat::findOrFail($seat['id']);
                
                // Заполнение места обновленными значениями.
                $cinemaSeat->fill($seat);
                
                // Сохранение обновленного места в базе данных.
                $cinemaSeat->save();
            }
        }

        // Возврат JSON-ответа с указанием успешного выполнения (true) и кодом состояния HTTP 201 (Создано).
        return response()->json(true, 201);
    }
}
