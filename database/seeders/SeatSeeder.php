<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SeatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $vipSeats = [53, 54, 55, 56];
        $totalDisabledSeats = 20;
        $totalSeats = 95;
        $totalCinemaHalls = 3;

        // Случайное определение занятых мест
        $disabledSeats = [];
        while (count($disabledSeats) < $totalDisabledSeats) {
            $randomSeat = rand(1, $totalSeats);
            if (!in_array($randomSeat, $vipSeats) && !in_array($randomSeat, $disabledSeats)) {
                $disabledSeats[] = $randomSeat;
            }
        }

        // Заполнение мест для каждого зала
        for ($num = 1; $num <= $totalSeats; $num++) {
            if (in_array($num, $vipSeats)) {
                $status = 'vip';
            } elseif (in_array($num, $disabledSeats)) {
                $status = 'disabled';
            } else {
                $status = 'standard';
            }

            for ($h = 1; $h <= $totalCinemaHalls; $h++) {
                DB::table('seats')->insert([
                    'number' => $num,
                    'status' => $status,
                    'cinema_hall_id' => $h,
                ]);
            }
        }
    }
}

