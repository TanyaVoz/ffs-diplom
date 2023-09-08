<?php

namespace App\Services;

use App\Models\Seat;
use App\Models\Ticket;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class TicketService
{
    /**
     * Create tickets for selected seats in the database.
     *
     * @param array $params
     * @return \App\Models\Ticket
     */
    public function create(array $params): Ticket
    {
        if (empty($params['seats'])) {
            throw new \InvalidArgumentException("Error! Cannot create tickets for seats");
        }

        return DB::transaction(function () use ($params) {
            $tickets = Ticket::create($params);

            foreach ($params['seats'] as $seatId) {
                $seat = Seat::findOrFail($seatId);
                $tickets->seats()->attach($seat);
            }

            return $tickets;
        });
    }
}
