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
    // Метод возвращает массив доступных кинозалов, сеансов и фильмов для заданной даты.
    public function calendar(string $datetime): array
    {
        // Преобразование входной даты и времени в нужный формат.
        $timeSeance = DateTime::createFromFormat('Y-m-d', $datetime)->format('Y-m-d');

        // Получение доступных кинозалов для указанной даты.
        $cinemaHalls = $this->getAvailableCinemaHalls($timeSeance);

        // Получение доступных сеансов для указанной даты и кинозалов.
        $sessions = $this->getAvailableSessions($timeSeance);

        // Получение доступных фильмов для полученных сеансов.
        $films = $this->getAvailableFilms($sessions);

        // Возврат собранной информации.
        return [
            "cinemaHalls" => $cinemaHalls,
            "sessions" => $sessions,
            "films" => $films,
        ];
    }

    // Метод возвращает детали сеанса и доступные места для заданного идентификатора сеанса.
    public function seatSelect(int $sessionId): array
    {
        // Получение деталей сеанса для указанного идентификатора.
        $session = $this->getSessionDetails($sessionId);

        // Получение доступных мест для кинозала, связанного с сеансом.
        $seats = $this->getSessionSeats($session->cinema_hall_id);

        // Возврат деталей сеанса и доступных мест.
        return [
            "session" => $session,
            "seats" => $seats,
        ];
    }

    // Получение и возврат доступных кинозалов для заданной даты.
    private function getAvailableCinemaHalls(string $date)
    {
        return CinemaHall::where('free', 1)
            ->whereHas('sessions', function (Builder $query) use ($date) {
                $query->whereDate('datetime', $date);
            })
            ->select('id', 'name')
            ->get();
    }

    // Получение и возврат доступных сеансов для заданной даты.
    private function getAvailableSessions(string $date)
    {
        return Session::whereDate('datetime', $date)
            ->whereHas('cinemaHall', function (Builder $query) {
                $query->where('free', 1);
            })
            ->get();
    }

    // Получение и возврат доступных фильмов для предоставленных сеансов.
    private function getAvailableFilms($sessions)
    {
        return Film::whereIn('id', $sessions->pluck('film_id')->unique())->get();
    }

    // Получение деталей сеанса для заданного идентификатора сеанса.
    private function getSessionDetails(int $sessionId)
    {
        return Session::where('sessions.id', $sessionId)
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
    }

    // Получение и возврат доступных мест для заданного идентификатора кинозала.
    private function getSessionSeats(int $cinemaHallId)
    {
        // Получение мест с их статусом и количеством билетов.
        $seats = Seat::where('cinema_hall_id', $cinemaHallId)
            ->select('id', 'number', 'status')
            ->withCount('tickets')
            ->get();

        // Обновление статуса места на основе количества проданных билетов.
        $seats->each(function ($seat) {
            $seat->status = $seat->tickets_count > 0 ? 'sold' : $seat->status;
        });

        return $seats;
    }
}


