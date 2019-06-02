@extends('layouts.app')

@section('sectioncontent')
<section id="hero">
    <div class="hero-container">
        <div class="col-8 col-sm-6 col-md-6 col-lg-6">
            <form class="form-login" action="{{ route('login') }}" method="post">
                @csrf
                
                <h2>Ingrese sus datos</h2>
                <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3 mb-2">
                    <label for="inputEmail" class="sr-only">Correo Electrónico</label>
                    <div class="mb-2">
                        <input type="email" name="email" id="inputEmail" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" placeholder="Correo Electrónico" required autofocus>
                        @if ($errors->has('email'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                        @endif
                    </div>

                    <label for="inputPassword" class="sr-only">Contraseña</label>
                    <div>
                        <input type="password" name="password" id="inputPassword" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" placeholder="Contraseña" required>
                        @if ($errors->has('password'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                        @endif
                    </div>
                </div>
                <div class="checkbox mb-3">
                    <label class="text-white">
                        <input type="checkbox" value="recordarme"> Recordarme
                    </label>
                </div>

                <div class="col-12 col-sm-12 col-md-10 col-lg-4 offset-md-1 offset-lg-4">
                    <button class="btn btn-primary " type="submit">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    </div>
</section>
@endsection