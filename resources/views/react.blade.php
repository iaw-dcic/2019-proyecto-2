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

    <!-- Styles -->
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
    <!--<div id="react-app"></div>-->

    <!--Navbar-->
    <nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll" href="#page-top">Protonóstico</a>
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link js-scroll" href="#inicio">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll" href="#equipos">Equipos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll" href="#partidos">Partidos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll" href="#pronosticos">Pronósticos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll" href="#ingresar">Ingresar</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!--Navbar-->

    <!--Página principal-->
    <div id="inicio" class="intro route bg-image" style="background-image: url({{ asset('images/intro-bg.jpg') }})">
        <div class="overlay-itro"></div>
        <div class="intro-content display-table">
            <div class="table-cell">
                <div class="container">
                    <h1 class="intro-title mb-4">Copa Mundial de la FIFA 2018</h1>
                    <p class="intro-subtitle"><span class="text-slider-items">Duis veniam aliquip.,Sunt excepteur nisi.,Sint laboris est.,laborum non amet qui esse.</span><strong class="text-slider"></strong></p>
                </div>
            </div>
        </div>
    </div>
    <!--Página principal-->

    <!--Equipos-->
    <section id="equipos" class="equipos route">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="title-box text-center">
                        <h3 class="title-a">Equipos</h3>
                          <p class="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div class="line-mf"></div>
                </div>

                <!--Equipos-->
                <div class="row">
                    <!--Equipo-->
                    <div class="col-md-3 my-2">
                        <div class="card card-equipo">
                            <div class="card-img">
                                <a href="#"><img src="{{ asset('images/post-1.jpg') }}" alt="" class="img-fluid"></a>
                            </div>
                        </div>
                    </div>
                    <!--Equipo-->
                </div>
                <!--Equipos-->
            </div>
        </div>
    </section>
    <!--Equipos-->

    <!--Partidos-->
    <section id="partidos" class="partidos route">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="title-box text-center">
                        <h3 class="title-a mt-5">Partidos</h3>
                        <p class="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div class="line-mf"></div>
                </div>
            </div>
        </div>

        <!--Partidos-->
            <div class="list-group mb-5">
                <!--Partido-->
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">Thursday 14 June</h4>
                        <small>14 Jun 2018 - 18:00 Local time</small>
                    </div>
                    <div class="row">
                        <div class="col-3 d-flex justify-content-start">
                            <p>Group A</p>
                        </div>
                    <div class="col-9 d-flex justify-content-center">
                        <p class="mx-2 local">Russia</p><img class="mr-2 imagen-mini-equipo" src="https://api.fifa.com/api/v1/picture/flags-fwc2018-4/rus">
                            6-0
                        <img class="ml-2 imagen-mini-equipo" src="https://api.fifa.com/api/v1/picture/flags-fwc2018-4/ksa"><p class="mx-2 visitante">Saudi Arabia</p>
                    </div>
                </div>
            </a>
        </div>
    </section>
    <!--Partidos-->

    <!--Contador partidos-->
    <div class="contador-partidos bg-image" style="background-image: url({{ asset('images/footer-bg.jpg') }})">
        <div class="overlay-mf"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-3 col-lg-3">
                    <div class="counter-box pt-4 pt-md-0">
                        <div class="counter-ico">
                    <span class="ico-circle"><i class="ion-checkmark-round"></i></span>
                    </div>
                    <div class="counter-num">
                        <p class="counter">450</p>
                        <span class="counter-text">WORKS COMPLETED</span>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 col-lg-3">
                <div class="counter-box pt-4 pt-md-0">
                    <div class="counter-ico">
                        <span class="ico-circle"><i class="ion-ios-calendar-outline"></i></span>
                    </div>
                    <div class="counter-num">
                        <p class="counter">15</p>
                        <span class="counter-text">YEARS OF EXPERIENCE</span>
                    </div>
                </div>
                </div>
                    <div class="col-sm-3 col-lg-3">
                        <div class="counter-box pt-4 pt-md-0">
                            <div class="counter-ico">
                                <span class="ico-circle"><i class="ion-ios-people"></i></span>
                            </div>
                        <div class="counter-num">
                            <p class="counter">550</p>
                            <span class="counter-text">TOTAL CLIENTS</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 col-lg-3">
                    <div class="counter-box pt-4 pt-md-0">
                        <div class="counter-ico">
                            <span class="ico-circle"><i class="ion-ribbon-a"></i></span>
                        </div>
                        <div class="counter-num">
                            <p class="counter">36</p>
                            <span class="counter-text">AWARD WON</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <!--Pronósticos-->
    <section id="pronosticos" class="pronosticos route">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="title-box text-center">
                        <h3 class="title-a">Pronósticos</h3>
                        <p class="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <div class="line-mf"></div>
                    </div>
                </div>
            </div>

        <!--Pronósticos-->
        <div id="tablero-pronosticos"></div>

        </div>
    </section>
    <!--Sección pronósticos-->

    <!--Sección footer-->>
    <section class="bg-image footer route" style="background-image: url({{ asset('images/footer-bg.jpg') }})">
        <div class="overlay-mf"></div>
        <footer>
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                <div class="copyright-box">
                    <p class="copyright">&copy; Copyright 2019. Todos los derechos reservados</p>
                    <div class="credits">
                        <a href="https://github.com/dylanbarbona">Dylan Barbona</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
    </section>

    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
    <div id="preloader"></div>

    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
