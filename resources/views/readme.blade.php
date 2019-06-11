@extends('layouts.app')

@section('content')
<div class="container">

    <div class="text-center">
        <h1 class="pb-3">¡Bienvenido!</h1>
        <p>Esta es una aplicación web para el proyecto N° 2 de la materia Ingeniera de Aplicaciones Web.</p>

        <p>
            Se trata de una página que nos permite crear una cuenta de usuario para logearnos y poder personalizar
            nuestro avatar.
            <br>
            Los cambios realizados pueden ser guardados para su posterior visualización o edición.
        </p>

        <p>
            La aplicación fue desarrollada utilizando: React, REST, Laravel, MySQL y Bootstrap.
            <br>
            Muchas gracias a Pablo Stanley por las increibles ilustraciónes de los avatares. [<a href="https://avataaars.com/" target="_blank">Avataaars library</a>]
        </p>
    </div>
</div>

@endsection
