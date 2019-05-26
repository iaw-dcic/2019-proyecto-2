@extends('layouts.app')


@section('content')
<br><br>
<section class="bg-primary text-white mb-0" id="about">
  <div class="container">
    <h2 class="text-center text-uppercase text-white">HOLA {{ auth()->user()->name }}</h2>
    <hr class="star-light mb-5">
    <div class="row">

      <div id="react-app"></div>

    </div>
    <br><br>

  </div>
</section>
@endsection