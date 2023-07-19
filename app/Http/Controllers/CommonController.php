<?php

namespace App\Http\Controllers;

use App\Models\CinemaHall;
use App\Models\Film;
use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;
use App\Models\Seat;
use App\Models\Ticket;

class CommonController extends Controller
{


    public function index()
    {

        $cinemaHalls = CinemaHall::with('sessions')
        ->where('free', 1)
        ->select('id', 'hall_title')
        ->get();;


        // Все фильмы доступные 
        $filmId = Session::whereHas('cinemaHall', function (Builder $query) {
            $query->where('free', 1);
        })->pluck('film_id');

        $films = Film::all()->whereIn('id', $filmId);

         return ["films" => $films, "cinemaHalls" => $cinemaHalls];


// о сеансе

public function testing($sessionId)
{
    $session = Session::where('sessions.id', $sessionId)
        ->join('cinema_halls', 'sessions.cinema_hall_id', '=', 'cinema_halls.id')
        ->join('films', 'sessions.film_id', '=', 'films.id')
        ->select(
            'sessions.id',
            'sessions.time',
            'films.title',
            'film_id',
            'sessions.cinema_hall_id',
            'cinema_halls.hall_title',
            'cinema_halls.row',
            'cinema_halls.chair',
            'cinema_halls.price_standard',
            'cinema_halls.price_vip',
        )->get();

    return ["session" => $session];


}

    }





}