<template>
  <q-item-section avatar>
    <transition v-if="darkAndLightModeFlag" appear enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut">
      <q-icon name="mdi-white-balance-sunny" class="text-primary" size="32px"></q-icon>
    </transition>
    <transition v-else appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <q-icon name="mdi-moon-waxing-crescent" class="text-primary" size="32px"></q-icon>
    </transition>
    <q-tooltip class="bg-primary text-capitalize" anchor="center right" self="center left">
      {{$t('toolTip.darkAndLightMode')}}
    </q-tooltip>
  </q-item-section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'darkAndLightMode',
  props: {
    darkAndLightModeFlag: {
      type: Boolean,
      default: false,
      required: true
    }
  }
})
</script>
