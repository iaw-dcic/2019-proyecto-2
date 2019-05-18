@extends('layouts.app')

@section('myLayoutTitle', 'About')

@section('scriptFileListing')
    <script src="{{ asset('js/app.js') }}" defer></script>
@endsection

@section('content')
    <div id="react-app"></div>
@endsection