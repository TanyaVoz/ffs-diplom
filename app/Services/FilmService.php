<?php

namespace App\Services;

use App\Http\Requests\FilmRequest;
use App\Models\Film;
use Illuminate\Support\Facades\Storage;

class FilmService
{
    public function getAllFilms(): \Illuminate\Database\Eloquent\Collection
    {
        return Film::all();
    }

    public function createFilm(FilmRequest $request): bool
    {
        $film = new Film;
        $film->fill($request->validated());
        $film->poster = $this->storePoster($request);
        return $film->save();
    }

    public function getFilmById(int $id): ?Film
    {
        return Film::find($id);
    }

    public function updateFilm(FilmRequest $request, Film $film): bool
    {
        if ($request->has('poster')) {
            Storage::delete($film->poster);
            $film->poster = $this->storePoster($request);
        }

        $film->fill($request->validated());
        return $film->save();
    }

    public function deleteFilm(Film $film): bool
    {
        Storage::delete($film->poster);
        return $film->delete();
    }

    protected function storePoster(FilmRequest $request): string
    {
        return $request->poster->store('posters');
    }
}
