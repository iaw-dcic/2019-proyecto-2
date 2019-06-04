@extends('layouts.app')

    @section('scrips')
        <script src="{{ asset('js/app.js') }}" defer></script>
    @endsection

    @section('content')
        <div id="react-app"></div>
    @endsection