<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <link href="{{ asset('css/welcome.css') }}" rel="stylesheet">
    </head>
    <body>
        <div class="flex-center position-ref full-height">

            <div class="content">

                <div class="title m-b-md">
                    Ingenieria de Aplicaciones Web, Proyecto 2
                </div>

                @if (Route::has('login'))
                    <div class="links">
                        @auth
                            <a href="{{ route('react') }}">Create Avatar</a>
                        @else
                            <a href="{{ route('login') }}">Login</a>

                            @if (Route::has('register'))
                                <a href="{{ route('register') }}">Register</a>
                            @endif
                        @endauth

                        <a href="{{ route('about') }}">About</a>

                        @auth
                        <a href="{{ url('/logout') }}">Logout</a>
                        @endauth
                    </div>
                @endif

            </div>

        </div>
    </body>
</html>