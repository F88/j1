<template>
  <div class="ymca">
    Test
  </div>
</template>

<style lang="scss">
.ymca {
  @include center; // will be resolved as position:absolute....
  color: $gray; // will be resolved to #333
}
</style>
