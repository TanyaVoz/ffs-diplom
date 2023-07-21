<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CinemaHallSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cinema_halls')->insert([
            'name' => 'Зал 1',
            'row' => 8,
            'chair' => 12,
            'price_standard' => 300,
            'price_vip' => 600,
            'free' => true
        ]);

        DB::table('cinema_halls')->insert([
            'name' => 'Зал 2',
            'row' => 8,
            'chair' => 12,
            'price_standard' => 300,
            'price_vip' => 700,
            'free' => true
        ]);

        DB::table('cinema_halls')->insert([
            'name' => 'Зал 3',
            'row' => 8,
            'chair' => 12,
            'price_standard' => 450,
            'price_vip' => 800,
            'free' => true
        ]);

        DB::table('cinema_halls')->insert([
            'name' => 'Зал 4',
            'row' => 8,
            'chair' => 12,
            'price_standard' => 500,
            'price_vip' => 1400,
            'free' => true
        ]);

        DB::table('cinema_halls')->insert([
            'name' => 'Зал 5',
            'row' => 8,
            'chair' => 12,
            'price_standard' => 200,
            'price_vip' => 350,
            'free' => true
        ]);

        DB::table('cinema_halls')->insert([
            'name' => 'Зал 6',
            'row' => 8,
            'chair' => 12,
            'price_standard' => 500,
            'price_vip' => 1000,
            'free' => true
        ]);

    
    }
}
