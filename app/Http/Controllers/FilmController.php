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
        $film = new Film;
        $film->fill($request->validated());
        $film->poster = $request->poster->store('posters');
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
        if ($request->has('poster')) {
            Storage::delete($film->poster);
            $film->poster = $request->poster->store('posters');
        }
        $film->fill($request->safe()->except('poster'));
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
        Storage::delete($film->poster);
        if ($film->delete()) {
            return response(null, Response::HTTP_NO_CONTENT);
        }
        return null;
    }
}
