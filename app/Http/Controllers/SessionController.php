<?php

namespace App\Http\Controllers;

use App\Http\Requests\SessionRequest;
use App\Models\Session;
use App\Services\SessionService;
use DateTime;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Response;

class SessionController extends Controller
{
    protected $sessionService;

    public function __construct(SessionService $sessionService)
    {
        $this->sessionService = $sessionService;
    }

    /**
     * Display a list of all sessions.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(): Collection
    {
        return Session::all();
    }

    /**
     * Store a new session record in the database.
     *
     * @param \App\Http\Requests\SessionRequest $request
     * @return \App\Models\Session
     */
    public function store(SessionRequest $request): Session
    {
        return $this->sessionService->createSession($request);
    }

    /**
     * Display a list of sessions for the specified date.
     *
     * @param string $date
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function show($date): Collection
    {
        $formattedDate = DateTime::createFromFormat('Y-m-d', $date)->format('Y-m-d');
        return Session::whereDate('datetime', $formattedDate)->get();
    }

    /**
     * Update session information in the database.
     *
     * @param \App\Http\Requests\SessionRequest $request
     * @param \App\Models\Session $session
     * @return bool
     */
    public function update(SessionRequest $request, Session $session): bool
    {
        return $this->sessionService->updateSession($request, $session);
    }

    /**
     * Remove a session entry from the database.
     *
     * @param \App\Models\Session $session
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function destroy(Session $session)
    {
        if ($this->sessionService->deleteSession($session)) {
            return response(null, Response::HTTP_NO_CONTENT);
        }

        return response()->json(['message' => 'Failed to delete the session.'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
