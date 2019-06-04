@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card card-container">
        <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
        <p id="profile-name" class="profile-name-card"></p>
        <form class="form-signin" method="POST" action="{{ route('login') }}" autocomplete="off">
            @csrf
            <div class="form-group row inputs">
                <input type="email" id="email" class="form-control @error('email') is-invalid @enderror" placeholder="Email address" name="email" value="{{ old('email') }}" required>
                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="form-group row inputs">
                <input type="password" id="password" class="form-control @error('password') is-invalid @enderror" placeholder="Password" name="password" required autocomplete="current-password">
                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div id="remember" class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            <hr class="my-4">
            <a href="{{ route('register') }}" class="btn btn-lg btn-success btn-block">Create account</a>
        </form>
        <div id="forgotPass">
            <br>
            <a href="{{ route('password.request') }}" class="forgot-password">Forgot your password?</a>
        </div>
    </div>
</div>
@endsection
