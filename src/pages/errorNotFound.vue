<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2 text-capitalize" style="opacity:.4">
        {{$t('general.notFoundText')}}
      </div>

      <q-btn class="q-mt-xl text-capitalize" color="white" text-color="blue" unelevated to="/"
        :label="$t('label.goHome')" no-caps />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'errorNotFound'
});
</script>
