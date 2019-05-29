@extends('layouts.app')


@section('content')
<br><br>
<section class="bg-primary text-secondary mb-0" id="contact">
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="text-center text-uppercase text-secondary mb-0">Crea tu Devil Donut <img class="donasbotones" src="img/Logo/logo.png" /></h2>
      </div>

    </div>
    <div class="row">
      <div class="col fondo"><img src="img/Donas/dona.png" class="medio" /></div>
      <div class="col fondo">
        <br><br>
        <h4 class="font-weight-light mb-0">Sabor </h4>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/donaVainilla.png" /> <br> Vainilla</button>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/donaChocolate.png" /> <br> Chocolate</button>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/donaMixta.png" /><br> Mixta</button>

        <br><br>

        <h4 class="font-weight-light mb-0">Glaseado </h4>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/glaseadoBlanco.png" /> <br> </button>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/glaseadoChocolate.png" /> <br> </button>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/glaseadoRosa.png" /><br> </button>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/glaseadoCeleste.png" /><br> </button>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/glaseadoNaranja.png" /><br> </button>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/glaseadoVacio.png" /><br> </button>

        <br><br>

        <h4 class="font-weight-light mb-0">Decoración </h4>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/chispas1.png" /> <br> </button>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/chispas2.png" /> <br> </button>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/chispas3.png" /><br> </button>
        <br>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/glaseado1.png" /> <br> </button>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/glaseado2.png" /><br> </button>
        <button type="button" class="btn"><img class="donasbotones" src="img/Donas/sin.png" /><br> </button>
      </div>

    </div>
  </div>
</section>
@endsection


<!-- <h2 class="text-center text-uppercase text-white">HOLA {{ auth()->user()->name }}</h2>
    <hr class="mb-5">
    <div class="row">
      <div id="react-app"></div>
    </div>
    <br><br> 
  
  
col-6 col-md-4 
col-12 col-md-8 
-->