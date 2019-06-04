<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    
</head>
<body>
    <div id="app">
         <!-- NavBar  -->
        @include('navBar')

          <!-- Mensaje flash de error para formularios  --> 
          @if ($errors->any())
        <div class="alert  alert-danger" role="alert">
                <ul>
                        @foreach($errors->all() as $error)
                                <li>{{ $error }}</li>
                        @endforeach
                </ul>
        </div>
        @endif

        <main class="py-4">
            @yield('content')
        </main>

        <footer class="fixed-bottom">
            @include('footer')
        </footer>
    </div>
</body>
</html>
