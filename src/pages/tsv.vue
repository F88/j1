<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div id="table">
        <div>{{ $route.query }}</div>
        <QRCode :url="link1.url" :title="link1.title" />
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
    </v-flex>
  </v-layout>
</template>

<script>
import QRCode from '~/components/QRCode.vue'

export default {
  name: 'Print',
  components: {
    QRCode
  },
  asyncData({ route, params }) {
    const title = route.query.t || 'Title'
    const h = route.query.h || ''
    const header = h.split('\t')
    const r = route.query.r || ['']
    const rows = r.map((e) => e.split('\t'))
    return { title, header, rows }
  },
  data() {
    return {
      layout: 'print',
      title: '',
      header: [],
      rows: [],
      link1: {
        url: 'https://studyathome.web.app/',
        title: 'Title of target'
      }
    }
  }
}
</script>

<style></style>
