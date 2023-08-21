<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketRequest;
use App\Services\TicketService;
use Illuminate\Http\Response;

class TicketController extends Controller
{
    /**
     * Instance of the ticket service.
     *
     * @var \App\Services\TicketService
     */
    private $ticketService;

    /**
     * Create a new controller instance.
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
     * Store a new ticket in the data storage.
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
        
        return response($ticket, 201);
    }
}


