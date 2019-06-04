<?php
<<<<<<< HEAD

=======
 /* Copiado entero de: https://gist.github.com/haog1/19542070babe15c66e5b3c4c0cb211ee 
    Antes de modificar este archivo corri este comando: 
        php artisan vendor:publish --provider="Fideloper\Proxy\TrustedProxyServiceProvider" 
 */
>>>>>>> 58f7794224c082a70efddb0d9c6822a6e6acecde
return [

    /*
     * Set trusted proxy IP addresses.
     *
     * Both IPv4 and IPv6 addresses are
     * supported, along with CIDR notation.
     *
     * The "*" character is syntactic sugar
     * within TrustedProxy to trust any proxy
     * that connects directly to your server,
     * a requirement when you cannot know the address
<<<<<<< HEAD
     * of your proxy (e.g. if using ELB or similar).
     *
     */
    'proxies' => '*', // [<ip addresses>,], '*', '<ip addresses>,'

    /*
     * To trust one or more specific proxies that connect
     * directly to your server, use an array or a string separated by comma of IP addresses:
     */
    // 'proxies' => ['192.168.1.1'],
    // 'proxies' => '192.168.1.1, 192.168.1.2',

    /*
     * Or, to trust all proxies that connect
     * directly to your server, use a "*"
     */
    // 'proxies' => '*',

    /*
     * Which headers to use to detect proxy related data (For, Host, Proto, Port)
     * 
     * Options include:
     * 
     * - Illuminate\Http\Request::HEADER_X_FORWARDED_ALL (use all x-forwarded-* headers to establish trust)
     * - Illuminate\Http\Request::HEADER_FORWARDED (use the FORWARDED header to establish trust)
     * - Illuminate\Http\Request::HEADER_X_FORWARDED_AWS_ELB (If you are using AWS Elastic Load Balancer)
     *
     * - 'HEADER_X_FORWARDED_ALL' (use all x-forwarded-* headers to establish trust)
     * - 'HEADER_FORWARDED' (use the FORWARDED header to establish trust)
     * - 'HEADER_X_FORWARDED_AWS_ELB' (If you are using AWS Elastic Load Balancer)
     * 
     * @link https://symfony.com/doc/current/deployment/proxies.html
     */
    'headers' => Illuminate\Http\Request::HEADER_X_FORWARDED_ALL,

];
=======
     * of your proxy (e.g. if using Rackspace balancers).
     *
     * The "**" character is syntactic sugar within
     * TrustedProxy to trust not just any proxy that
     * connects directly to your server, but also
     * proxies that connect to those proxies, and all
     * the way back until you reach the original source
     * IP. It will mean that $request->getClientIp()
     * always gets the originating client IP, no matter
     * how many proxies that client's request has
     * subsequently passed through.
     */

    /*
     * Or, to trust all proxies that connect
     * directly to your server, uncomment this:
     */
    'proxies' => '*',

    /*
     * Or, to trust ALL proxies, including those that
     * are in a chain of forwarding, uncomment this:
    */
    # 'proxies' => '**',

    /*
     * Default Header Names
     *
     * Change these if the proxy does
     * not send the default header names.
     *
     * Note that headers such as X-Forwarded-For
     * are transformed to HTTP_X_FORWARDED_FOR format.
     *
     * The following are Symfony defaults, found in
     * \Symfony\Component\HttpFoundation\Request::$trustedHeaders
     *
     * You may optionally set headers to 'null' here if you'd like
     * for them to be considered untrusted instead. Ex:
     *
     * Illuminate\Http\Request::HEADER_CLIENT_HOST  => null,
     * 
     * WARNING: If you're using AWS Elastic Load Balancing or Heroku,
     * the FORWARDED and X_FORWARDED_HOST headers should be set to null 
     * as they are currently unsupported there.
     */
    'headers' => [
//        (defined('Illuminate\Http\Request::HEADER_FORWARDED') ? Illuminate\Http\Request::HEADER_FORWARDED : 'forwarded') => 'FORWARDED',
        Illuminate\Http\Request::HEADER_FORWARDED    => null, // not set on AWS or Heroku
        Illuminate\Http\Request::HEADER_CLIENT_IP    => 'X_FORWARDED_FOR',
        Illuminate\Http\Request::HEADER_CLIENT_HOST  => null, // not set on AWS or Heroku
//        Illuminate\Http\Request::HEADER_CLIENT_HOST  => 'X_FORWARDED_HOST',
        Illuminate\Http\Request::HEADER_CLIENT_PROTO => 'X_FORWARDED_PROTO',
        Illuminate\Http\Request::HEADER_CLIENT_PORT  => 'X_FORWARDED_PORT',
    ]
];
>>>>>>> 58f7794224c082a70efddb0d9c6822a6e6acecde
