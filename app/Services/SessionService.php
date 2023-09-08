<?php

namespace App\Services;

use App\Http\Requests\SessionRequest;
use App\Models\Session;

class SessionService
{
    public function createSession(SessionRequest $request): Session
    {
        return Session::create($request->validated());
    }

    public function updateSession(SessionRequest $request, Session $session): bool
    {
        $session->fill($request->validated());
         
        return $session->save();
    }

    public function deleteSession(Session $session): bool
    {
        return $session->delete();
    }
}

