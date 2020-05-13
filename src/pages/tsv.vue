<template>
  <div id="table">
    <div>{{ $data }}</div>
    <div>{{ $route.query }}</div>
    <h1>{{ title }}</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <th v-for="c in header" :key="c">
            {{ c }}
          </th>
        </thead>
        <tbody>
          <tr v-for="r in rows" :key="r">
            <td v-for="c in r" :key="c">{{ c }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'Print',
  asyncData({ route, params }) {
    const title = route.query.t || 'Title'
    const header = route.query.h.split('\t')
    const rows = []
    route.query.r.forEach((e) => rows.push(e.split('\t')))
    return { title, header, rows }
  },
  data() {
    return {
      layout: 'print',
      title: '',
      header: [],
      rows: []
    }
  }
}
</script>

<style></style>
