<?php

namespace App\View\Components\Public;

use App\Enums\CacheKeys;
use App\Models\HomeCarouselImage;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\Component;

class HomeCarousel extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        $carouselImages = Cache::rememberForever(CacheKeys::ActiveCarousel->value, function () {
            return HomeCarouselImage::where('is_visible', true)
                ->orderBy('display_order')
                ->get();
        });

        return view('components.public.home-carousel', [
            'carouselImages' => $carouselImages,
        ]);
    }
}
