<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilmRequest;
use App\Models\Film;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class FilmController extends Controller
{
    /**
     * Display a listing of the films.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        // Получаем список всех фильмов из базы данных.
        $films = Film::all();
        return $films;
    }

    /**
     * Store a newly created film in storage.
     *
     * @param \App\Http\Requests\FilmRequest $request
     * @return bool|int
     */
    public function store(FilmRequest $request): bool|int
    {
        // Создаем новый экземпляр модели Film.
        $film = new Film;

        // Заполняем модель данными, прошедшими валидацию из запроса.
        $film->fill($request->validated());

        $film->poster = $this->storePoster($request);

        return $film->save();
    }

    /**
     * Display the specified film.
     *
     * @param int $id
     * @return \App\Models\Film|null
     */
    public function show($id): ?\App\Models\Film
    {
        // Отображаем информацию о конкретном фильме на основе переданного идентификатора $id.
        $film = Film::findOrFail($id);
        return $film;
    }

    /**
     * Update the specified film in storage.
     *
     * @param \App\Http\Requests\FilmRequest $request
     * @param \App\Models\Film $film
     * @return bool|int
     */
    public function update(FilmRequest $request, Film $film): bool|int
    {
        // Если в запросе есть новый файл постера, удаляем старый файл из директории 'posters'.
        if ($request->has('poster')) {
            Storage::delete($film->poster);
            // Загружаем новый файл постера в директорию 'posters'.
            $film->poster = $this->storePoster($request);
        }

        $film->fill($request->validated());

        return $film->save();
    }

    /**
     * Remove the specified film from storage.
     *
     * @param \App\Models\Film $film
     * @return \Illuminate\Http\Response|null
     * @throws \Exception
     */
    public function destroy(Film $film): ?\Illuminate\Http\Response
    {
        // Удаляем связанный файл постера из директории 'posters'.
        Storage::delete($film->poster);

        // Пытаемся удалить фильм из базы данных.
        if ($film->delete()) {
            
            return response(null, Response::HTTP_NO_CONTENT);
        }

        return null;
    }

    /**
     * Store the poster file in the 'posters' directory.
     *
     * @param \App\Http\Requests\FilmRequest $request
     * @return string
     */
    protected function storePoster(FilmRequest $request): string
    {
        // Загружаем файл постера фильма в директорию 'posters'.
        return $request->poster->store('posters');
    }
}
