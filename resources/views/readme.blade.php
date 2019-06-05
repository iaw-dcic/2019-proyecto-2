@extends('react')

@section('title','Sobre My Snoovatar')

@section('content')
<div id="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="jumbotron bg-secondary text-dark">
                <span class="about-title font-weight-bold pb-3">Sobre My Snoovatar</span>
                <div class="about-info text-justify">
                    Proyecto de cursada para la materia 'Ingeniería de Aplicaciones Web' de la Universidad Nacional del Sur.<br>
                </div>
                <div class="about-info text-justify">
                    El enunciado del proyecto se puede encontrar <a class="about-link" href="http://cs.uns.edu.ar/~dcm/iaw/downloads/Proyectos/Proyecto2.pdf" target="_blank" rel="noopener">aquí</a>.<br>
                </div>
                <hr class="my-2">
                <div class="about-info text-justify">
                    Los <a class="about-link font-italic" href="/">snoovatares</a> estan basados en los avatares del mismo nombre de <a class="about-link" href="https://www.reddit.com/" target="_blank" rel="noopener">Reddit</a>.<br>
                    <span class="font-small">Todos los derechos son de sus respectivos dueños.</span><br>
                </div>
                <hr class="my-4">
                <div class="about-info text-justify">
                    Se utilizaron las siguientes tecnologías:<br>
                    <a class="about-link" href="https://laravel.com/" target="_blank" rel="noopener">Laravel</a><br>
                    <a class="about-link" href="https://reactjs.org/" target="_blank" rel="noopener">ReactJS</a><br>
                    <a class="about-link" href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a><br>
                    <a class="about-link" href="https://fontawesome.com/" target="_blank" rel="noopener">Font Awesome</a><br>
                    <a class="about-link" href="https://themestr.app/" target="_blank" rel="noopener">Themestr</a><br>
                    <a class="about-link" href="https://www.heroku.com/" target="_blank" rel="noopener">Heroku</a><br>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
