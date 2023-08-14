<?php


namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Сеанс для фильма "Звёздные войны XXIII: Атака клонированных клонов"
        $date = new DateTime('2023-06-26T23:59:00.000+05:30');
        DB::table('sessions')->insert([
            'datetime' => $date->format('Y-m-d H:i'),
            'cinema_hall_id' => 1,
            'film_id' => 1,
        ]);

        // Сеанс для фильма "Альфа"
        $date2 = new DateTime('2023-06-27T11:30:00.000+05:30');
        DB::table('sessions')->insert([
            'datetime' => $date2->format('Y-m-d H:i'),
            'cinema_hall_id' => 3,
            'film_id' => 2,
        ]);

        // Сеанс для фильма "Хищник"
        $date3 = new DateTime('2023-06-27T12:20:00.000+05:30');
        DB::table('sessions')->insert([
            'datetime' => $date3->format('Y-m-d H:i'),
            'cinema_hall_id' => 5,
            'film_id' => 3,
        ]);

        // Сеанс для фильма "Звёздные войны XXIII: Атака клонированных клонов"
        $date4 = new DateTime('2023-06-27T14:40:00.000+05:30');
        DB::table('sessions')->insert([
            'datetime' => $date4->format('Y-m-d H:i'),
            'cinema_hall_id' => 2,
            'film_id' => 1,
        ]);

        // Сеанс для фильма "Альфа"
        $date5 = new DateTime('2023-06-27T18:30:00.000+05:30');
        DB::table('sessions')->insert([
            'datetime' => $date5->format('Y-m-d H:i'),
            'cinema_hall_id' => 4,
            'film_id' => 2,
        ]);

        // Сеанс для фильма "Хищник"
        $date6 = new DateTime('2023-06-27T23:00:00.000+05:30');
        DB::table('sessions')->insert([
            'datetime' => $date6->format('Y-m-d H:i'),
            'cinema_hall_id' => 6,
            'film_id' => 3,
        ]);
    }
}
