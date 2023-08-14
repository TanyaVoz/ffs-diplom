<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Получить список всех сеансов
        $sessions = DB::table('sessions')->pluck('id');

        foreach ($sessions as $session_id) {
            // Генерировать случайное количество билетов от 1 до 10
            $numTickets = random_int(1, 10);

            // Вставить билеты для текущего сеанса
            for ($i = 0; $i < $numTickets; $i++) {
                DB::table('tickets')->insert([
                    'session_id' => $session_id,
                ]);
            }
        }
    }
}
