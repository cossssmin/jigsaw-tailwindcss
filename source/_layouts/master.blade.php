<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>{{ $page->siteTitle }}</title>
        <link rel="stylesheet" href="{{ mix('/css/main.css') }}">
    </head>
    <body class="antialiased font-sans">
        @yield('content')
    </body>
</html>
