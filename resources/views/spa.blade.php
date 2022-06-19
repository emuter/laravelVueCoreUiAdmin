
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  @php
$config = [
    'appName' => config('app.name'),
    'locale' => $locale = app()->getLocale(),
    'locales' => config('app.locales'),
    'githubAuth' => config('services.github.client_id'),
];
//$appJs = mix('dist/js/main.js');
//$appCss = mix('dist/css/app.css');
@endphp

  <title>{{ config('app.name') }}</title>

  <link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">

</head>
<body class="dark-theme h-100">
  <div id="app" class="h-100"></div>

  <script>
    window.config = @json($config);
  </script>

  <script src="{{ mix('dist/js/main.js') }}"></script>
</body>
</html>
