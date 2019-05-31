@extends('layouts.react')
<title>Mi Perfil</title>
@section('content')
<link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
<link href="{{ asset('css/stylecss.css') }}" rel="stylesheet">
<link href="{{ asset('css/estilo.css') }}" rel="stylesheet">
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Usuario') }}</div>

                <div class="card-body">
                        <div class="form-group row">
                            <label for="actualname" class="col-md-4 col-form-label text-md-right">{{ __('Nombre') }}:</label>
                            <label for="username" class="col-md-6 col-form-label text-md-left">{{$user->name}}</label>
                        </div>

                        <div class="form-group row">
                            <label for="actuallastname" class="col-md-4 col-form-label text-md-right">{{ __('Apellido') }}:</label>
                            <label for="userlastname" class="col-md-6 col-form-label text-md-left">{{$user->lastname}}</label>
                        </div>

                        <div class="form-group row">
                            <label for="actualemail" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail') }}:</label>
                            <label for="useremail" class="col-md-6 col-form-label text-md-left">{{$user->email}}</label>
                        </div>

                        <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-4">
                            <a class="btn btn-primary" href="{{ url('/users/'.Auth::user()->id.'/edit') }}">
                                {{ __('Editar') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
