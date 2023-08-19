<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiTokenController;
use App\Http\Controllers\CinemaHallController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\SeatController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\CommonController;
use App\Http\Controllers\TicketController;

// /*
// |--------------------------------------------------------------------------
// | API Routes
// |--------------------------------------------------------------------------
// |
// | Here is where you can register API routes for your application. These
// | routes are loaded by the RouteServiceProvider within a group which
// | is assigned the "api" middleware group. Enjoy building your API!
// |
// */

Route::post('/tokens/create', [ApiTokenController::class, 'createToken']);

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('/cinemaHall', CinemaHallController::class);
    Route::apiResource('/film', FilmController::class);
    Route::put('/seats/update', [SeatController::class, 'updateMany']);
    Route::apiResource('/seats', SeatController::class);
    Route::apiResource('/session', SessionController::class);
});

Route::get('/client/calendar/{date}', [CommonController::class, 'calendar']);
Route::get('/client/seats/{session}', [CommonController::class, 'seatSelect']);
Route::apiResource('/ticket', TicketController::class);

