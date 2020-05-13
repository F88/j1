<template>
  <table class="message-table">
    <thead>
      <tr>
        <td>{{ $route.query.h1 }}</td>
        <td>{{ $route.query.h2 }}</td>
        <td>{{ $route.query.h3 }}</td>
        <td>{{ $route.query.h4 }}</td>
        <td>{{ $route.query.h5 }}</td>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-yel">
        <td>
          {{ $route.query.r1 }}
        </td>
        <td>
          {{ $route.query.r2 }}
        </td>
        <td>
          {{ $route.query.r3 }}
        </td>
        <td>
          {{ $route.query.r4 }}
        </td>
        <td>
          {{ $route.query.r5 }}
        </td>
      </tr>
      <tr class="bg-yel">
        <td>2</td>
        <td>
          {{ $route.query.secondsubject }}
        </td>
        <td>
          {{ $route.query.secondUnit }}
        </td>
        <td>
          {{ $route.query.secondContent }}
        </td>
        <td />
      </tr>
      <tr class="bg-yel">
        <td>3</td>
        <td>
          {{ $route.query.thirdsubject }}
        </td>
        <td>
          {{ $route.query.thirdUnit }}
        </td>
        <td>
          {{ $route.query.thirdContent }}
        </td>
        <td />
      </tr>
      <tr>
        <td>4</td>
        <td>
          {{ $route.query.fourthsubject }}
        </td>
        <td>
          {{ $route.query.fourthUnit }}
        </td>
        <td>
          {{ $route.query.fourthContent }}
        </td>
        <td />
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Print',
  layout: 'print',
  data() {
    const headers = ['aaa', 'bbb', 'ccc']
    return { headers }
  }
}
</script>

<style></style>
