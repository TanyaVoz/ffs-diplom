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
        $date3 = new DateTime('2023-06-27T14:40:00.000+05:30');
        DB::table('sessions')->insert([
            'datetime' => $date3->format('Y-m-d H:i'),
            'cinema_hall_id' => 2,
            'film_id' => 3,
        ]);

    }
}
