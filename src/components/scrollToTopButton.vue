<template>
  <q-page-scroller position="bottom-left" :scroll-offset="scrollOffset" :offset="offset">
    <q-btn fab icon="keyboard_arrow_up" color="primary" />
  </q-page-scroller>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'scrollToTopButton',
  props: {
    scrollOffset: {
      type: Number,
      required: true
    },
    offset: {
      type: Array,
      required: true
    }
  }
})
</script>
