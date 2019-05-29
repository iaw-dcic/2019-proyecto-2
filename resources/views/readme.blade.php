@extends('react')

@section('title','Sobre My Snoovatar')

@section('content')
<div id="container">
    <div class="row justify-content-center">
        <div class="col-md-5">
            <div class="jumbotron bg-info">
                <span class="about-title">Sobre MySnoovatar</span>
                <div class="about-info text-justify">
                Proyecto de cursada para la materia Ingeniería de Aplicaciones Web 2019 de la Universidad Nacional del Sur.<br>
                </div>
                <div class="about-info text-justify">
                Nota: Al momento de editar una playlist solo es posible agregar o eliminar videos, la edicion de videos de una playlist se para una proxima implementación.<br>
                </div>
                <div class="about-info text-justify">
                Resultados Audit:<br>
                Performance: 58<br>
                Accesibilidad: 92<br>
                </div>
                <hr class="my-4">
                <div class="about-info text-justify">
                    Usa las siguientes tecnologías:<br>
                    <a class="about-link" href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a><br>
                    <a class="about-link" href="https://fonts.google.com/" target="_blank" rel="noopener">Google Fonts</a><br>
                    <a class="about-link" href="https://github.com/KaneCohen/embed" target="_blank" rel="noopener">embed</a><br>
                    <a class="about-link" href="https://themestr.app/" target="_blank" rel="noopener">Themestr</a><br>
                    <a class="about-link" href="https://www.heroku.com/" target="_blank" rel="noopener">Heroku</a><br>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
