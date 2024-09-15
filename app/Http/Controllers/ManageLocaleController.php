<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;

class ManageLocaleController extends Controller
{
    public function set(string $locale)
    {
        if (! in_array($locale, ['si', 'en', 'tm'])) {
            abort(400);
        }

        Session::put('appLocale', $locale);

        return redirect()->back();
    }
}
