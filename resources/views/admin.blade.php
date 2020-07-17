<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/theme-chalk/index.css" rel="stylesheet">
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
<!-- 引入cdn资源,减小chunk-vendors.js文件的大小 -->
<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/vuex/3.2.0/vuex.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/vue-router/3.2.0/vue-router.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js"></script>
<script src="{{ asset('js/admin/app.js') }}"></script>
</html>
