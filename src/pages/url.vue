<template>
  <div id="table">
    <div>{{ $route.query }}</div>
    <QRCode :url="link1.url" :title="link1.title" />
    <h1>{{ title }}</h1>
    {{ data }}
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <th v-for="(c, index) in header" :key="index">
            {{ c }}
          </th>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.company }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!--    <div>{{ $data }}</div>-->
  </div>
</template>

<script>
import axios from 'axios'
import QRCode from '~/components/QRCode.vue'

export default {
  watchQuery: true,
  name: 'Print',
  components: {
    QRCode
  },
  asyncData({ route, params, error }) {
    const wl = [
      'https://studyathome.web.app/api/',
      'http://jsonplaceholder.typicode.com/',
      'https://reqres.in/api/'
    ]
    const url = route.query.url || ''
    if (wl.some((e) => url.startsWith(e))) {
      return axios
        .get(url)
        .then((res) => {
          return { data: res.data }
        })
        .catch((e) => {
          // return { data: e }
          error({ statusCode: 404, message: 'Data not found' })
        })
    } else {
      return { data: [] }
    }
  },
  data() {
    return {
      layout: 'print',
      title: 'Title',
      header: ['a', 'b', 'c'],
      link1: {
        url: 'https://studyathome.web.app/',
        title: 'Title of target'
      }
    }
  }
}
</script>

<style></style>
