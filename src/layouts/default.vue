<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="false"
      :expand-on-hover="false"
      :floating="false"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'mdi-calendar-text',
          title: '1-1',
          to: '/1'
        },
        {
          icon: 'mdi-calendar-text',
          title: '1',
          to: '/1' + '?h1=a&h2=b&h3=c&h4=d&h5=e' + '&r1=1&r2=2&r3=3&r4=4&r5=5'
        },
        {
          icon: 'mdi-calendar-text',
          title: '2',
          to:
            '/2' +
            '?h=a&h=b&h=c&h=d&h=e' +
            '&r1=1-1&r1=1-2&r1=1-3&r1=1-4&r1=1-5' +
            '&r2=2-1&r2=2-2&r2=2-3&r2=2-4&r2=2-5'
        },
        {
          icon: 'mdi-calendar-text',
          title: 'tsv',
          to:
            '/tsv' +
            '?h=a%09b%09c%09d%09e' +
            '&r=1-1%091-2%091-3%091-4%091-5' +
            '&r=2-1%092-2%092-3%092-4%092-5'
        },
        {
          icon: 'mdi-calendar-text',
          title: 'url',
          to: '/url' + '?url=https%3A%2F%2Fexample.com%2F%0A'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'j'
    }
  }
}
</script>
