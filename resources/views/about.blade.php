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

    <div class="container firstTable">
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

    <div class="container secondTable">
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

    <div class="container secondTable">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Observations 1</div>
                    <div class="card-body">
                        <p><b>Vista de avatares creados: </b>No fue posible que la lista de avatares creados previamente se 
                        ajuste automaticamente al crear nuevos avatares, al agregarse cada vez mas quedan comprimidos. Si 
                        bien se tiene un overflow-x en el css para poder ver todos los avatares creados, y todos los botones
                        funcionan y se pueden editar los avatares ya creados, es dificil verlos.
                        Una forma de solucionarlo fue incrementar el width del flex con clase elementFlex de elementSelect.css
                        a un valor de 10000px, de esta forma, si bien tiene un limite, los avatares pueden verse por completo
                        y sin comprimirse.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container secondTable">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Observations 1</div>
                    <div class="card-body">
                        <p><b>Despues de crear el avatar: </b>Despues de presionar el boton de save para crear un avatar nuevo,
                        se tiene setteado como avatar actual el recientemente creado, esto significa que cualquier cambio 
                        se considera como una edicion a dicho avatar. Para crear uno nuevo, se debe apretar el boton reset.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="aboutFormat goBackButton">
        <button class="btn btn-outline-secondary" type="button" onclick="location.href='/'">Go Back</button>
    </div>
@endsection