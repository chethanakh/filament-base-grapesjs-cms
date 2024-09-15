<?php

namespace App\Http\Controllers;

use App\Enums\NewsStatus;
use App\Models\News;

class PublicNewsController extends Controller
{
    public function list()
    {
        $newsList = News::where('status', NewsStatus::PUBLISHED)->paginate(20);

        return view('public-site.news');
    }

    public function one($slug)
    {
        $news = News::where('status', NewsStatus::PUBLISHED)->where('slug', $slug)->firstOrFail();

        return view('public-site.single-news', ['news' => $news]);
    }
}
