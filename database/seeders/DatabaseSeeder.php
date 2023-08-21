<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
        AdminSeeder::class,
        CinemaHallSeeder::class,
        FilmSeeder::class,
        SeatSeeder::class,
        SessionSeeder::class,
        TicketSeeder::class,
        
        ]);
    }
}
