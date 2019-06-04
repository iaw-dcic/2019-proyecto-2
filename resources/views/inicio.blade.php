@extends('layouts.app')

@section('style')
<link href="{{ asset('css/styleinicio.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="container">
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-6 col-lg-6 bg-image">
      <img src="./images/inicio/principal.png">
    </div>
    <div class="col-md-6 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <!-- Texto de bienvenida -->
            <div class="col-md-9 col-lg-8 mx-auto">
              <div class="fondoBienvenida">
                <h1 class="font-weight-light">Bienvenido a nuestro sitio web</h1>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection