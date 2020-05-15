<template>
  <div class="qrcode-container">
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td class="">{{ item.name }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' }
      ]
    }
  }
}
</script>
<style></style>
