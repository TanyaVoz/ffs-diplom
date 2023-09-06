<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilmRequest;
use App\Services\FilmService;
use Illuminate\Http\Response;

class FilmController extends Controller
{
    protected $filmService;

    public function __construct(FilmService $filmService)
    {
        
        $this->filmService = $filmService;
    }

    /**
     * Get a list of all films.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        
        $films = $this->filmService->getAllFilms();
        return $films;
    }

    /**
     * Store a new film in the data storage.
     *
     * @param  \App\Http\Requests\FilmRequest  $request
     * @return bool|int
     */
    public function store(FilmRequest $request): bool|int
    {
        
        return $this->filmService->createFilm($request);
    }

    /**
     * Get details of a specific film by ID.
     *
     * @param  int  $id
     * @return \App\Models\Film|null
     */
    public function show($id): ?\App\Models\Film
    {
       
        $film = $this->filmService->getFilmById($id);
        return $film;
    }

    /**
     * Update film information by ID.
     *
     * @param  \App\Http\Requests\FilmRequest  $request
     * @param  int  $id
     * @return bool|int
     */
    public function update(FilmRequest $request, $id): bool|int
    {
        
        $film = $this->filmService->getFilmById($id);
        
       
        if (!$film) {
            return false;
        }

        
        return $this->filmService->updateFilm($request, $film);
    }

    /**
     * Delete a film by ID.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response|null
     */
    public function destroy($id): ?\Illuminate\Http\Response
    {
        
        $film = $this->filmService->getFilmById($id);

       
        if (!$film) {
            return response(null, Response::HTTP_NOT_FOUND);
        }

       
        if ($this->filmService->deleteFilm($film)) {
            
            return response(null, Response::HTTP_NO_CONTENT);
        }

        return null;
    }
}

