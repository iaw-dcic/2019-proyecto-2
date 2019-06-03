<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    @if(isset($token) && $token != null)
        <meta name="token" content="{{ $token }}">
    @endif
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Protonóstico</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    <!-- Styles -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script src="{{ asset('libs/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('libs/popper/popper.min.js') }}"></script>
    <script src="{{ asset('libs/bootstrap/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('libs/easing/easing.min.js') }}"></script>
    <script src="{{ asset('libs/counterup/jquery.waypoints.min.js') }}"></script>
    <script src="{{ asset('libs/counterup/jquery.counterup.js') }}"></script>
    <script src="{{ asset('libs/typed/typed.min.js') }}"></script>
    <script src="{{ asset('libs/brackets/jquery.bracket.min.js') }}"></script>
</head>
<body id="page-top">
    <div id="react-app"></div>

    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
