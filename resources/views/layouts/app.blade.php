<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Prode') }}</title>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app2.css') }}" rel="stylesheet">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <!-- API Token -->
    @auth
    <meta name="api-token" content="{{Auth::user()->api_token}}">
    @endauth

</head>
<body class="app">
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark stycky-top">
                {{-- collapse --}}
                <button class="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
                        <span class="navbar-toggler-icon"></span>
                </button>



                <div class="collapse navbar-collapse" id="collapse_target">

                        <a class="navbar-brand" href="{{ route('react') }}"><img src="./futbol.png" alt="home"></a>
                        <span class="navbar-text">Prode</span>
                        </a>
                    <ul class="navbar-nav">
                    <!-- Authentication Links -->
                    @guest
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                        @if (Route::has('register'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                            </li>
                        @endif



                    @else
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-target="dropdown_target"  data-toggle="dropdown">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdown_target">
                                {{-- enlaces dentro de nuestro menu desplegable --}}
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </div>
                        </li>
                        <li>
                                <a class="nav-link" href="/readme">Readme</a>
                            </li>
                    @endguest
                   </ul>






        </nav>
        <br>
    <br>
        <div>
            @yield('content')
        </div>
    </div>





</div>
</body>
</html>
