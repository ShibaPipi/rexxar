<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin</title>
    <style>
        body {
            margin: 0;
        }
    </style>
</head>
<body>
<div id="root"></div>
</body>
<script src="{{ asset('js/app.js') }}"></script>
</html>