<?php

use Illuminate\Support\Facades\Route;

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

// Маршрут для администраторской страницы входа
Route::get('/admin/login', function () {
    return view('admin'); 
})->name('login'); 

// Группа маршрутов для администраторской панели
Route::prefix('admin')->group(function () {
    // Маршрут для всех страниц администраторской панели
    Route::get('/{path?}', function () {
        return view('admin'); 
    })->where('path', '.*'); 
});

// Маршрут для основной части 
Route::get('/{path?}', function () {
    return view('welcome'); 
})->where('path', '.*'); 
