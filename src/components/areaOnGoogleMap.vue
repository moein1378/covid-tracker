<template>
  <iframe width="100%" height="100%" scrolling="yes" class="rounded-borders" :src="mapAddress" allowfullscreen>
  </iframe>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'areaOnGoogleMap',
  props: {
    mapAddress: {
      type: String,
      required: true
    }
  }
})
</script>
