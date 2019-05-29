<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <title>Proyecto2 IAW</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Favicons -->
    <link href="img/favicon.png" rel="icon">
    <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Poppins:300,400,500,700" rel="stylesheet">

    <!-- Bootstrap CSS File -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Libraries CSS Files -->
    <link href="{{ asset('lib/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('lib/animate/animate.min.css') }}" rel="stylesheet">

    <!-- Main Stylesheet File -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('css/personalstyles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/pruebatabla.css') }}" rel="stylesheet">

    <!-- =======================================================
    Theme Name: Regna
    Theme URL: https://bootstrapmade.com/regna-bootstrap-onepage-template/
    Author: BootstrapMade.com
    License: https://bootstrapmade.com/license/
  ======================================================= -->
</head>

<body>
    <!--==========================
  Header
  ============================-->
    <header id="header">
        <div class="row">
            <div class="col-xs-2 col-sm-8 col-md-6 col-lg-5 offset-xs-9 offset-sm-3 offset-md-5 offset-lg-6">
                <nav id="nav-menu-container">
                    <ul class="nav-menu mr-auto">
                        <li>
                            <a href="/">{{ __('Inicio') }}</a>
                        </li>
                        <li>
                            <a href="{{ route('readme') }}">{{ __('Readme') }}</a>
                        </li>
                        @guest
                        <li>
                            <a href="{{ route('login') }}">{{ __('Iniciar Sesión') }}</a>
                        </li>
                        @if (Route::has('register'))
                        <li>
                            <a href="{{ route('register') }}">{{ __('Registrarse') }}</a>
                        </li>
                        @endif
                        @else
                        <li>
                            <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </li>
                        @endguest
                    </ul>
                </nav><!-- #nav-menu-container -->
            </div>


        </div>
    </header><!-- #header -->

    @yield('sectioncontent')

    <main class="py-4">
        @yield('content')
    </main>

    <!--==========================
    Footer
  ============================-->
    <footer id="footer">
        <div class="footer-top">
            <div class="container">

            </div>
        </div>

        <div class="container">
            <div class="copyright">
                &copy; Copyright <strong>Regna</strong>. All Rights Reserved
            </div>
            <div class="credits">
                <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Regna
        -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </div>
    </footer><!-- #footer -->

    <script src="{{ asset('/lib/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('/lib/jquery/jquery-migrate.min.js') }}"></script>
    <script src="{{ asset('/lib/easing/easing.min.js') }}"></script>
    <script src="{{ asset('/lib/wow/wow.min.js') }}"></script>
    <script src="{{ asset('/lib/superfish/superfish.min.js') }}"></script>
    <script src="{{ asset('js/main.js') }}"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>

</body>

</html>