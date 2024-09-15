<?php

use App\Http\Controllers\ManageLocaleController;
use App\Http\Controllers\PublicNewsController;
use App\Http\Controllers\StaticPageController;
use Illuminate\Support\Facades\Route;

Route::name('public.')->middleware('set.locale')->group(function () {
    Route::get('/', [StaticPageController::class, 'home'])->name('home');
    Route::get('/about-us', [StaticPageController::class, 'aboutUs'])->name('about-us');
    Route::get('/contact-us', [StaticPageController::class, 'contactUs'])->name('contact-us');
    Route::name('news.')->prefix('news')->group(function () {
        Route::get('/', [PublicNewsController::class, 'list'])->name('list');
        Route::get('/{slug}', [PublicNewsController::class, 'one'])->name('one');
    });
});

Route::get('/set-locale/{locale}', [StaticPageController::class, 'home'])->name('home');

Route::get('/set-locale/{locale}', [ManageLocaleController::class, 'set'])->name('set-locale');
