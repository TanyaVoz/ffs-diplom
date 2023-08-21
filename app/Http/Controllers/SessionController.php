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
     * @param \Illuminate\Http\Request $request
     * @return \App\Models\Session
     */
    public function store(SessionRequest $request): Session
    {
        // Создание и сохранение нового сеанса в базе данных на основе проверенных данных из запроса.
        return Session::create($request->validated());
    }

    /**
     * Display a list of sessions for the specified date.
     *
     * @param string $date
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function show($date): Collection
    {
        // Преобразование даты из формата 'Y-m-d' в объект DateTime.
        $formattedDate = DateTime::createFromFormat('Y-m-d', $date)->format('Y-m-d');
        
        return Session::whereDate('datetime', $formattedDate)->get();
    }

    /**
     * Update session information in the database.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Session $session
     * @return bool
     */
    public function update(SessionRequest $request, Session $session): bool
    {
       // Заполнение информации о сеансе обновленными данными из запроса.
        $session->fill($request->validated());
         
        return $session->save();
    }

    /**
     * Remove a session entry from the database.
     *
     * @param \App\Models\Session $session
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function destroy(Session $session)
    {
       // Попытка удаления сеанса из базы данных.
        if ($session->delete()) {
         
            return response(null, Response::HTTP_NO_CONTENT);
        }
     // Возврат JSON-ответа с сообщением об ошибке, если удаление не удалось, и кодом состояния HTTP 500 (Внутренняя ошибка сервера).
        return response()->json(['message' => 'Failed to delete the session.'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
