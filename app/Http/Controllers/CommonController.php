<?php

namespace App\Http\Controllers;

use App\Models\CinemaHall;
use App\Models\Film;
use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;

class CommonController extends Controller
{


    public function index()
    {

        $cinemaHalls = CinemaHall::with('sessions')->where('free', 1)->select('id', 'hall_title')->get();


        // Все фильмы в открытых залах
        $filmId = Session::whereHas('cinemaHall', function (Builder $query) {
            $query->where('free', 1);
        })->pluck('film_id');
        $films = Film::all()->whereIn('id', $filmId);

        return ["cinemaHalls" => $cinemaHalls, "films" => $films];




    }





}