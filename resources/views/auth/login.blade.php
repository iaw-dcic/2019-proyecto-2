@extends('layouts.app')

@section('content')
<div class="container container-register mb-5">
    <div class="row mt-5">
        <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card card-signin flex-row my-5">
                <div class="card-img-left card-img-left-login d-none d-md-flex">
                <!-- Background image for card set in CSS! -->
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">Registro</h5>
                    <form action="/login" method="POST" id="form-login" class="form-login">
                    @csrf
                        <div class="form-label-group">
                            <input type="email" id="validationEmail" value="{{ old('email') }}" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" placeholder="E-mail" name="email" required autofocus>
                            @if ($errors->has('email'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-label-group">
                            <input id="validationPasswordLogin" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" placeholder="Contraseña" required>
                            <div class="invalid-feedback">Contraseña inválida, debe tener entre 6 y 24 caracteres.</div>
                            @if ($errors->has('password'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="invalid-feedback hide" id="invalid-email-pass">Usuario o contraseña inválidos. Intente nuevamente.</div>

                        <button class="btn btn-lg btn-primary btn-block" id="btn_login" type="submit">Ingresar</button>
                        <a class="d-block text-center mt-2 small" href="{{route('register')}}">Registrarse</a>
                        @if (Route::has('password.request'))
                            <div class="col-12 d-flex justify-content-center forgot">
                                <a href="{{ route('password.request') }}">¿Olvidaste tu contraseña?</a>
                            </div>
                        @endif
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
