<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{ $metaTags ?? '' }}

    <title> {{__('common.site-title')}} | {{ $pageName ?? '' }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css','resources/css/font-awesome.min.css', 'resources/js/app.js'])
</head>

<body>
    <nav>
        @include('layouts.public-header')
    </nav>
    <main>
        {{ $slot }}
    </main>
    @include('layouts.public-footer')
</body>

</html>
