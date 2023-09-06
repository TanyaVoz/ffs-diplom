<?php

namespace App\Http\Controllers;

use App\Services\CinemaHallService;

use App\Http\Requests\CinemaHallRequest;
use App\Models\CinemaHall;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class CinemaHallController extends Controller
{
    protected $cinemaHallService;

    public function __construct(CinemaHallService $cinemaHallService)
    {
        $this->cinemaHallService = $cinemaHallService;
    }

    /**
     * Display a list of cinema halls.
     */
    public function index()
    {
        return $this->cinemaHallService->getAllCinemaHalls();
    }

    /**
     * Store a newly created cinema hall.
     *
     * @param \App\Http\Requests\CinemaHallRequest $request
     * @return \App\Models\CinemaHall
     */
    public function store(CinemaHallRequest $request)
    {
        return $this->cinemaHallService->createCinemaHall($request);
    }

    /**
     * Display information about the specified cinema hall.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(int $id)
    {
        return $this->cinemaHallService->getCinemaHallById($id);
    }

    /**
     * Update information about the specified cinema hall.
     *
     * @param \App\Http\Requests\CinemaHallRequest $request
     * @param \App\Models\CinemaHall $cinemaHall
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CinemaHallRequest $request, \App\Models\CinemaHall $cinemaHall)
    {
        return $this->cinemaHallService->updateCinemaHall($request, $cinemaHall);
    }

    /**
     * Remove the specified cinema hall.
     *
     * @param \App\Models\CinemaHall $cinemaHall
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(\App\Models\CinemaHall $cinemaHall)
    {
        return $this->cinemaHallService->deleteCinemaHall($cinemaHall);
    }
}
