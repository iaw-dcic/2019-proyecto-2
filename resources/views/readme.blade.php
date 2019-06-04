@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Acerca de</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <div class="table-responsive-md">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Alumno</th>
                                    <th>LU</th>
                                    <th>Materia</th>
                                    <th>Profesor</th>
                                    <th>Asistente</th>
                                    <th>Año</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jonathan Alberto Fritz</td>
                                    <td>99761</td>
                                    <td>Ingeniería de Aplicaciones Web</td>
                                    <td>Diego Martinez</td>
                                    <td>Mariano Tucat</td>
                                    <td>2019</td>
                                </tr>
                            </tbody>                     
                        </table>
                    </div>
                </div>
                <div class="card-body">

                    <p class="font-weight-bold">Prode - Fase Final de la Copa Libertadores 2019</p>
                    <p class="text-justify">La aplicación consiste de un prode para realizar pronósticos deportivos sobre la fase final de la Copa Libertadores 2019.</p>
                    <p class="font-weight-normal">El usuario puede crear sus propios pronósticos y luego guardarlos.
                    A su vez también puede eliminar pronósticos creados anteriormente.</p>
                    
                    <p class="font-weight-normal">Nota: Los estilos presentes en la aplicación fueron basados en el siguiente repositorio: codepen.io/efy/pen/RRRyJW.</p>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection