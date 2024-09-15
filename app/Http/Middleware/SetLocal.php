<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class SetLocal
{
    public function handle(Request $request, Closure $next): Response
    {
        if (Session::has('appLocale')) {
            if (! in_array(Session::get('appLocale'), ['si', 'en', 'tm'])) {
                abort(400);
            }

            App::setLocale(Session::get('appLocale'));
        } else {
            App::setLocale(config('app.fallback_locale'));
        }

        return $next($request);
    }
}
