<template>
  <div>
    <ul>
      <li>x</li>
      <ul>
        <li>{{ $route.fullPath }}</li>
        <li>{{ $route.params }}</li>
        <li>{{ $route.name }}</li>
        <li>{{ $route.path }}</li>
        <li>{{ $route.query }}</li>
        <li>{{ $route.redirectedFrom }}</li>
        <li>{{ $route.toString() }}</li>
      </ul>
      <li>x</li>
      <ul>
        <li>{{ $router.toString() }}</li>
      </ul>
      <li>x</li>
      <ul>
        <li>id: {{ $route.query.id }}</li>
        <li>name: {{ $route.query.name }}</li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
