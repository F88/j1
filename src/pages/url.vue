<template>
  <div id="table">
    <div>{{ $route.query }}</div>
    <QRCode :url="link1.url" :title="link1.title" />
    <h1>{{ title }}</h1>
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
  name: 'Print',
  components: {
    QRCode
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      'http://jsonplaceholder.typicode.com/users'
    )
    return { data }
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
