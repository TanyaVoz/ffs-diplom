<?php

namespace App\Http\Controllers;

use App\Models\CinemaHall;
use App\Models\Film;
use App\Models\Session;
use App\Models\Seat;
use DateTime;
use Illuminate\Database\Eloquent\Builder;

class CommonController extends Controller
{

    public function calendar(string $datetime): array
    {
        $timeSeance = DateTime::createFromFormat('Y-m-d', $datetime)->format('Y-m-d');

        //кинозалы(доступные)
        $cinemaHalls = CinemaHall::where('free', 1)
            ->whereHas('sessions', function (Builder $query) use ($timeSeance) {
                $query->whereDate('datetime', $timeSeance);
            })
            ->select('id', 'name')
            ->get();

        //фильмы(доступные)
        $sessions = Session::whereDate('datetime', $timeSeance)
            ->whereHas('cinemaHall', function (Builder $query) {
                $query->where('free', 1);
            })
            ->get();

        $films = Film::whereIn('id', $sessions->pluck('film_id')->unique())->get();

        return [
            "cinemaHalls" => $cinemaHalls,
            "sessions" => $sessions,
            "films" => $films,
        ];
    }

    public function seatSelect(int $sessionId): array
    {
        $session = Session::where('sessions.id', $sessionId)
            ->join('cinema_halls', 'sessions.cinema_hall_id', '=', 'cinema_halls.id')
            ->join('films', 'sessions.film_id', '=', 'films.id')
            ->select(
                'sessions.id',
                'sessions.datetime',
                'films.title',
                'sessions.cinema_hall_id',
                'cinema_halls.name',
                'cinema_halls.row',
                'cinema_halls.price_standard',
                'cinema_halls.price_vip',
            )
            ->first();

        $seats = Seat::where('cinema_hall_id', $session->cinema_hall_id)
            ->select('id', 'number', 'status')
            ->withCount('tickets')
            ->get();

        $seats->each(function ($seat) {
            $seat->status = $seat->tickets_count > 0 ? 'sold' : $seat->status;
        });

        return [
            "session" => $session,
            "seats" => $seats,
        ];
    }
}
