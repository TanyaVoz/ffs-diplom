<?php

namespace App\Http\Controllers;

use App\Http\Requests\SessionRequest;
use App\Models\Session;
use DateTime;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Response;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Collection
    {
        return Session::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(SessionRequest $request): Session
    {
        return Session::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param string $datetime
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function show($datetime): Collection
    {
        $timeSeance = DateTime::createFromFormat('Y-m-d', $datetime)->format('Y-m-d');
        return Session::whereDate('datetime', $timeSeance)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Session $session
     * @return \Illuminate\Http\Response
     */
    public function update(SessionRequest $request, Session $session): bool
    {
        $session->fill($request->validated());
        return $session->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Session $session
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function destroy(Session $session)
    {
        if ($session->delete()) {
            return response(null, Response::HTTP_NO_CONTENT);
        }
        return response()->json(['message' => 'Failed to delete the session.'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
