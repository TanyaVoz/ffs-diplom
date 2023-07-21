<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketRequest;
use App\Services\TicketService;
use Illuminate\Http\Response;

class TicketController extends Controller
{
    /**
     * The ticket service instance.
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
        $this->ticketService = $ticketService;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\TicketRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TicketRequest $request): Response
    {
        $params = $request->validated();
        $ticket = $this->ticketService->create($params);
        return response($ticket, 201);
    }
}

