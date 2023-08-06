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
     * Отображение списка всех сеансов.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(): Collection
    {
        // Получение всех сеансов из базы данных и возврат их в виде коллекции.
        return Session::all();
    }

    /**
     * Сохранение нового сеанса в базе данных.
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
     * Отображение списка сеансов по указанной дате.
     *
     * @param string $datetime
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function show($datetime): Collection
    {
        // Преобразование даты из формата 'Y-m-d' в объект DateTime.
        $timeSeance = DateTime::createFromFormat('Y-m-d', $datetime)->format('Y-m-d');
        
        // Получение всех сеансов, у которых дата соответствует указанной дате, и возврат их в виде коллекции.
        return Session::whereDate('datetime', $timeSeance)->get();
    }

    /**
     * Обновление информации о сеансе в базе данных.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Session $session
     * @return bool
     */
    public function update(SessionRequest $request, Session $session): bool
    {
        // Заполнение информации о сеансе обновленными данными из запроса.
        $session->fill($request->validated());
        
        // Сохранение обновленных данных о сеансе в базе данных.
        return $session->save();
    }

    /**
     * Удаление сеанса из базы данных.
     *
     * @param \App\Models\Session $session
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function destroy(Session $session)
    {
        // Попытка удаления сеанса из базы данных.
        if ($session->delete()) {
            // Возврат успешного ответа без содержимого и кода состояния HTTP 204 (Нет содержимого).
            return response(null, Response::HTTP_NO_CONTENT);
        }
        
        // Возврат JSON-ответа с сообщением об ошибке, если удаление не удалось, и кодом состояния HTTP 500 (Внутренняя ошибка сервера).
        return response()->json(['message' => 'Не удалось удалить сеанс.'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
