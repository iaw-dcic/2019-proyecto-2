@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Verifique su cuenta de E-Mail</div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            Se ha enviado un link de verificación a su cuenta de e-mail
                        </div>
                    @endif

                    Antes de continur, chequeé su cuenta de e-mail
                    Si no recibió ningún e-mail, <a href="{{ route('verification.resend') }}">haga click aquí</a>.
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
