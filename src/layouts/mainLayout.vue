<template>
  <q-layout>
    <headerComponent></headerComponent>
    <q-page-container class="q-pa-sm">
      <router-view />
      <scrollToTopButton :scrollOffset="150" :offset="[18, 18]"></scrollToTopButton>
    </q-page-container>
    <footerComponent></footerComponent>
  </q-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import headerComponent from './../components/headerComponent.vue';
import footerComponent from './../components/footerComponent.vue';
import scrollToTopButton from './../components/scrollToTopButton.vue';
export default defineComponent({
  components: {
    headerComponent,
    footerComponent,
    scrollToTopButton
  },
})
</script>
