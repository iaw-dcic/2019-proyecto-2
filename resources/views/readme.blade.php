@extends('layouts.app')

@section('content')
<section id="hero">
    <div class="hero-container2">
        <div class="row">
            <div class="col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3">
                <p class="text-white">
               Proyecto 2 - IAW - UNS
                </p>
                
                <p class="text-white">
                Esta página permite al usuario logueado, crear pronósticos sobre Master 1000 de Roma <br>
                Estos son a partir de la instacia de octavos de final,permitiendo ver los anteriores.<br>
                Se asume que el usuario es consistente con su pronostico<br>
                Además se permite al usuario ver sus pronosticos, editarlos y/o eliminarlos<br>
                Se uso localStorage para almacenar en el navegador los datos que se van cambiando de los pronosticos.<br>

                 
                </p>
            </div>
        </div>
    </div>

</section>

@endsection