@extends('layouts.app')

@section('myLayoutTitle', 'About')

@section('cssFileListing')
    <link href="{{ asset('css/about.css') }}" rel="stylesheet">
@endsection

@section('content')
    <h1 class="aboutFormat">About This Project</h1>

    <div class="aboutFormat goBackButton">
        <button class="btn btn-outline-secondary" type="button" onclick="location.href='/'">Go Back</button>
    </div>

    <div id="firstTable" class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Owner</div>
                    <div class="card-body">
                        <p><b>Author:</b> Tomás Alejandro Gómez</p>
                        <p><b>Subject:</b> Ingenieria De Aplicaciones Web</p>
                        <p><b>Year:</b> 2019</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="secondTable" class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">External Sources</div>
                    <div class="card-body">
                        <p><b>Bootstrap 4.3:</b> https://getbootstrap.com/docs/4.3/getting-started/introduction/</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="aboutFormat goBackButton">
        <button class="btn btn-outline-secondary" type="button" onclick="location.href='/'">Go Back</button>
    </div>
@endsection