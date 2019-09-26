@extends('layouts.app')

@section('content')
<div class="container container-register">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card card-signin flex-row my-5">
          <div class="card-img-left card-img-left-register d-none d-md-flex">
          </div>

          <div class="card-body">
            <h5 class="card-title text-center">Registro</h5>
            <form id="form-register" class="form-signin"  action="/register" method="POST">
            @csrf
              <div class="form-label-group">
                <input type="text" id="validationServerUsername" class="form-control" placeholder="Nombre de usuario" name="username" required autofocus>
                <div class="invalid-feedback">Usuario inválido</div>
              </div>

              <div class="form-label-group">
                <input type="text" class="form-control" id="validationFirstName" placeholder="Nombre" name="name" required>
                <div class="invalid-feedback">Inserte su nombre</div>
              </div>

              <div class="form-label-group">
                <input type="email" id="validationServerEmail" class="form-control" placeholder="E-mail" name="email" required>
                <div class="invalid-feedback">E-mail inválido.</div>
              </div>

              <div class="form-label-group">
                <input type="password" id="validationPassword" class="form-control" placeholder="Password" name="password" required>
                <div class="invalid-feedback">Contraseña inválida, debe tener entre 6 y 24 caracteres.</div>
              </div>

            <button class="btn btn-lg btn-primary btn-block text-uppercase" id="btn_signup" type="submit">Registrarse</button>
            <a class="d-block text-center mt-2 small" href="{{route('login')}}">Ingresar</a>

            </form>
          </div>
        </div>
      </div>
    </div>
</div>

@endsection
