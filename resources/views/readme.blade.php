@extends('layouts.app')

@section('scripts')
    <script src="{{ asset('js/applaravel.js') }}" defer></script>
@endsection

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Readme</div>

                    <div class="card-body">
                            <h4>Alumno: Fiore Ibarguren, Agustín</h4>
                            <h4>LU: 111230</h4>
                            <p>Esta aplicación permite crear diferentes prodes de la fase eliminatoria de la actual Copa Libertadores.<p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection