<template>
  <q-card class="text-white" :class="(isDarkMode())?'bg-dark':'bg-linear'">
    <q-bar class="justify-end">
      <q-btn flat icon="close" v-close-popup>
        <q-tooltip class="text-primary text-capitalize" :class="(isDarkMode())?'bg-dark':'bg-white'">{{$t('close')}}
        </q-tooltip>
      </q-btn>
    </q-bar>

    <q-card-section>
      <div class="text-h6 text-capitalize">{{$t('dialog.about.title')}}</div>
    </q-card-section>

    <q-card-section class="q-pt-none text-capitalize">
      {{$t('dialog.about.text')}}
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'aboutDialogSection'
})
</script>
