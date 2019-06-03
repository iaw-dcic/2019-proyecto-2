<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Protonóstico</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <script src="{{ asset('libs/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('libs/popper/popper.min.js') }}"></script>
    <script src="{{ asset('libs/bootstrap/js/bootstrap.min.js') }}"></script>
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-b navbar-dark bg-dark navbar-expand-md" id="mainNav">
            <div class="container">
            <a class="navbar-brand" href="/#page-top">Protonóstico</a>
                
                <button class="navbar-toggler collapsed" style="border: none;" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="navbar-collapse collapse justify-content-end" id="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link mx-1" href="/#inicio">Inicio</a>
                        </li>
                        @auth
                        <li class="nav-item">
                            <a class="nav-link mx-1" href="/#pronosticos">Pronósticos</a>
                        </li>
                        @else
                        <li class="nav-item">
                            <a class="nav-link mx-1" href="/login">Ingresar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-1" href="/register">Registrarse</a>
                        </li>
                        @endauth
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>

        <script src="{{ asset('js/register.js') }}"></script>
    </div>
</body>
</html>
