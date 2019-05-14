@extends(layouts.app)

@section('extraStyles')
<link href="https://fonts.googleapis.com/css?family=Abel|Lobster|Merriweather" rel="stylesheet">
<link href= "{{asset('css/readmeStyle.css')}}" rel="stylesheet">
@endsection

@section('content')
    <h1 class="titulo">Readme</h1>
    
<div class="general">
    <div class="all-Info">
        <div class="d-flex flex-column justify-content-center Autoria">
            <div class="p-2">Autor: Pablo Guillermo Ceballos Vitale</div>
            <div class="p-2">Universidad Nacional del Sur</div>
            <div class="p-2">Año 2019 <div>
        
        </div>
    </div>
</div>

<div class="d-flex flex-column">
    <h3> Comentarios y/o aclaraciones </h3>
        <ul>
            <li>Es probable que al lanzar la App desde Heroku, la homepage no cargue los etilos CSS, desconozco las razones por las cuales ocurre esto
                esto SOLO OCURRE LA PRIMERA VEZ, cuando se vuelve a cargar la homepage, la misma se carga con los estilos CSS como debería.
                     Esto solo ocurre para la homeepage </li>
            <li>La contraseña al crear un usuario debe ser como mínimo de 8 caracteres </li>
            <li>Para los estilos y la presentación se usó el framework de estilos Bootstrap: https://getbootstrap.com/ </li>
            <li>Con lo que respecta al ingreso de fechas para los juegos,
                    no existe un chequeo de si la fecha ingresada corresponde a una fecha que NO sea posterior a la fecha actual </li>
            <li>para ciertas estilos de texto se usó Google Fonts: https://fonts.google.com/ </li>
        </ul>
</div>

@endsection