<?php

namespace App\Http\Controllers;

class StaticPageController extends Controller
{
    public function home()
    {
        return view('public-site.home');
    }

    public function aboutUs()
    {
        return view('public-site.about-us');
    }

    public function contactUs()
    {
        return view('public-site.contact-us');
    }
}
