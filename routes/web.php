<?php

use App\Http\Controllers\ManageLocaleController;
use App\Http\Controllers\StaticPageController;
use Illuminate\Support\Facades\Route;

Route::name('public.')->middleware('set.locale')->group(function () {
    Route::get('/', [StaticPageController::class, 'home'])->name('home');
});

Route::get('/set-locale/{locale}', [StaticPageController::class, 'home'])->name('home');

Route::get('/set-locale/{locale}', [ManageLocaleController::class, 'set'])->name('set-locale');
