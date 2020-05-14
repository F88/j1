<template>
  <div class="qrcode-container">
    <qrcode-vue
      :value="url"
      :size="size"
      :level="level"
      :background="background"
      :foreground="foreground"
      render-as="svg"
    >
    </qrcode-vue>
    <a :href="url" target="_blank" rel="noopener">{{ title }}</a>
  </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'

export default {
  components: {
    QrcodeVue
  },
  props: {
    url: { type: String, required: true },
    title: { type: String, required: true }
  },
  data() {
    return {
      size: 96,
      level: 'L',
      background: '#FFF',
      foreground: '#000'
    }
  }
}
</script>
<style>
.qrcode-container {
  width: 114px;
  height: 136px;
  padding: 8px;
  background-color: #fff;
}
</style>
