<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div id="table">
        <div>{{ $route.query }}</div>
        <QRCode :url="link1.url" :title="link1.title" />
        <span>
          <QRCode url="https://httpbin.org/" title="httpbin.org" />
        </span>
        <h1>{{ title }}</h1>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <th v-for="(c, index) in header" :key="index">
                {{ c }}
              </th>
            </thead>
            <tbody>
              <tr v-for="(r, i) in rows" :key="i">
                <td v-for="(c, j) in r" :key="j">{{ c }}</td>
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
