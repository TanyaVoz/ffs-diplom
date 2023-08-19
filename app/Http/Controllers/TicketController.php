<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketRequest;
use App\Services\TicketService;
use Illuminate\Http\Response;

class TicketController extends Controller
{
    /**
     * Экземпляр сервиса для билетов.
     *
     * @var \App\Services\TicketService
     */
    private $ticketService;

    /**
     * Создание нового экземпляра контроллера.
     *
     * @param  \App\Services\TicketService  $ticketService
     * @return void
     */
    public function __construct(TicketService $ticketService)
    {
        // Внедрение экземпляра сервиса для работы с билетами.
        $this->ticketService = $ticketService;
    }

    /**
     * Сохранение нового билета в хранилище данных.
     *
     * @param  \App\Http\Requests\TicketRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TicketRequest $request): Response
    {
        // Валидация входящего запроса с использованием TicketRequest.
        $params = $request->validated();
        
        // Создание нового билета с использованием TicketService, передав параметры из запроса.
        $ticket = $this->ticketService->create($params);
        
        // Возврат ответа с информацией о созданном билете и кодом состояния HTTP 201 (Создано).
        return response($ticket, 201);
    }
}


