<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'AvatarIO') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" type="text/javascript" defer></script>

    <!-- Fonts -->
    <!-- <link href="//fonts.gstatic.com" rel="dns-prefetch" type="text/css"> -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css"> -->

    <!-- Styles -->
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css"> -->
</head>
<body>
    <div id="react-app"></div>
</body>
</html>
