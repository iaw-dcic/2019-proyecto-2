<?php

namespace App\Http\Middleware;

use Closure;

/*
 Creado por https://gist.github.com/haog1/19542070babe15c66e5b3c4c0cb211ee
*/

class HttpsProtocol
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$request->secure() && env('APP_ENV') === 'production') {

            return redirect()->secure($request->getRequestUri());

        }

        return $next($request);
    }
}
