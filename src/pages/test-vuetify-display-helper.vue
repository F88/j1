<template>
  <div>
    <v-card-title class="headline">
      Welcome to the Vuetify
    </v-card-title>
    <div class="d-none">Hidden on all</div>
    <div class="d-none d-sm-flex">Hidden only on xs</div>
    <div class="d-sm-none d-md-flex">Hidden only on sm</div>
    <div class="d-md-none d-lg-flex">Hidden only on md</div>
    <div class="d-lg-none d-xl-flex">Hidden only on lg</div>
    <div class="d-xl-none">Hidden only on xl</div>
    <hr />
    <div class="d-flex">Visible on all</div>
    <div class="d-flex d-sm-none">Visible only on xs</div>
    <div class="d-none d-sm-flex d-md-none">Visible only on sm</div>
    <div class="d-none d-md-flex d-lg-none">Visible only on md</div>
    <div class="d-none d-lg-flex d-xl-none">Visible only on lg</div>
    <div class="d-none d-xl-flex">Visible only on xl</div>
    <hr />
    <div class="d-print-none">Screen Only (Hide on print only)</div>
    <div class="d-none d-print-block">Print Only (Hide on screen only)</div>
    <div class="d-none d-lg-block d-print-block">
      Hide up to large on screen, but always show on print
    </div>
    <hr />
    <div>
      <Table />
    </div>
    <div class="d-print-table">
      <Table />
    </div>
    <div class="d-none d-print-table">
      <Table />
    </div>
  </div>
</template>

<script>
import Table from '~/components/Table.vue'

export default {
  name: 'Print',
  layout: 'print',
  components: {
    Table
  },
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
<style>
@media screen {
  .v-application .headline {
    font-weight: bolder;
    font-size: 3rem !important;
    line-height: 2rem !important;
    font-family: 'Ubuntu' !important;
    color: orangered;
  }
  .v-content {
    background-image: url('~static/torinoko/p0026_l.jpeg');
    /*background-image: url('~static/torinoko/p0527_l.png');*/
    /*background-image: url('~static/torinoko/p0531_l.png');*/
    /*background-image: url('~static/torinoko/paper_00069.jpg');*/
    /*background-image: url('~static/torinoko/paper_00101.jpg');*/
    /*background-image: url('~static/torinoko/paper_00104.jpg');*/
  }
}
@media print {
  /*.v-navigation-drawer {*/
  /*  display: none;*/
  /*}*/
  /*.v-navigation-drawer__content {*/
  /*  display: none;*/
  /*}*/
  .v-app-bar {
    display: none;
  }
  .v-application .headline {
    font-weight: bolder !important;
    font-family: 'Frijole', cursive !important;
    font-size: 5rem !important;
    letter-spacing: 0rem !important;
    line-height: 1em !important;
    color: blue;
  }
  .v-content {
    background-image: url('~static/torinoko/paper_00101.jpg');
  }
}
</style>
