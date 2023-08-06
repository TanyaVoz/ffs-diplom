<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilmRequest;
use App\Models\Film;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        // Отображает список всех фильмов из базы данных.
        return Film::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\FilmRequest $request
     * @return bool
     */
    public function store(FilmRequest $request): bool
    {
        // Создает новый экземпляр модели Film.
        $film = new Film;

        // Заполняет модель данными, прошедшими валидацию из запроса.
        $film->fill($request->validated());

        // Загружает файл постера фильма в директорию 'posters'.
        $film->poster = $request->poster->store('posters');

        // Сохраняет фильм в базе данных и возвращает результат операции (boolean).
        return $film->save();
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \App\Models\Film|null
     */
    public function show($id): ?\App\Models\Film
    {
        // Отображает информацию о конкретном фильме на основе переданного идентификатора $id.
        return Film::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\FilmRequest $request
     * @param \App\Models\Film $film
     * @return bool
     */
    public function update(FilmRequest $request, Film $film): bool
    {
        // Если в запросе есть новый файл постера, удаляем старый файл из директории 'posters'.
        if ($request->has('poster')) {
            Storage::delete($film->poster);
            // Загружаем новый файл постера в директорию 'posters'.
            $film->poster = $request->poster->store('posters');
        }

        // Заполняем модель данными, прошедшими валидацию из запроса (исключая 'poster').
        $film->fill($request->safe()->except('poster'));

        // Сохраняем обновленные данные фильма в базе данных и возвращаем результат операции (boolean).
        return $film->save();
    }

    /**
     * Remove the specified resource from storage.
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
            // Если операция удаления прошла успешно, возвращаем ответ с кодом состояния HTTP 204 (No Content).
            return response(null, Response::HTTP_NO_CONTENT);
        }

        // Возвращаем null, если операция удаления не удалась.
        return null;
    }
}
