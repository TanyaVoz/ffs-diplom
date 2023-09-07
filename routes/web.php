<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admin/login', [WelcomeController::class, 'login'])->name('login');

Route::prefix('admin')->group(function () {
    Route::get('/{path?}', [WelcomeController::class, 'login'])->where('path', '.*');
});

Route::get('/{path?}', [WelcomeController::class, 'index'])->where('path', '.*');


