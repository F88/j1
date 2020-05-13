<template>
  <div id="table">
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

export default {
  name: 'Print',
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
      header: ['a', 'b', 'c']
    }
  }
}
</script>

<style></style>
