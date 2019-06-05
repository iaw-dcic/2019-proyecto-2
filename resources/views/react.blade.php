@extends('layouts.app')

@section('myLayoutTitle', 'Avatar App')

@section('tokenAuthentication')
    <meta name="api-token" content="{{ Auth::user()->api_token }}">
@endsection

@section('scriptFileListing')
    <script src="{{ asset('js/app.js') }}" defer></script>
@endsection

@section('content')
    <div id="react-app"></div>
@endsection