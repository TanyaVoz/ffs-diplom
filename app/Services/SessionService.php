<?php

namespace App\Services;

use App\Http\Requests\SessionRequest;
use App\Models\Session;

class SessionService
{
    public function createSession(SessionRequest $request): Session
    {
        // Создание и сохранение нового сеанса в базе данных на основе проверенных данных из запроса.
        return Session::create($request->validated());
    }

    public function updateSession(SessionRequest $request, Session $session): bool
    {
        // Заполнение информации о сеансе обновленными данными из запроса.
        $session->fill($request->validated());
         
        return $session->save();
    }

    public function deleteSession(Session $session): bool
    {
        // Попытка удаления сеанса из базы данных.
        return $session->delete();
    }
}

