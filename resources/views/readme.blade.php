@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header text-center border-success text-success">
                    <h2>Readme</h2>
                </div>              
                <div class="card-body text-center"><b>
                Esta aplicacion fue creada con un objetivo especificamente academico.<br>
                Diseñada por Agustin Garcia para la catedra de Ingenieria de Aplicaciones Web.<br>
                La aplicacion permite predecir un resultado de los playoffs de la NBA 2019.<br>
                </div>
                <div class="card-body text-left"><b>
                +Para elegir un equipo, se debera clickear el boton perteneciente a un determinado equipo en una determinada ronda y este avanzara a la siguiente.<br><br>
                +Una vez finalizada nuestra prediccion, es posible guardarla haciendo uso del boton "Save Fixture".<br><br>
                +Si se desea realizar una nueva prediccion se debera clickear el boton "New Fixture".<br></b>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
