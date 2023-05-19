<template>
  <div class="col-auto">
    <div :class="
    (bgMode == 'simple' && !isDarkMode()) ?
    'bg-white custom-shadow-box' :
    (bgMode == 'simple' && isDarkMode()) ?
    'bg-dark custom-shadow-box':
    'bg-linear' " class="statistics-box q-pa-md column rounded-borders">
      <div class="statistics-box-header flex justify-between items-center">
        <h6 :class="(bgMode == 'simple') ? 'linear-text bg-linear' : 'text-white'"
          class="q-ma-none text-weight-bold text-capitalize">{{ statisticName }}</h6>
        <q-icon :name="icon" :class="(bgMode == 'simple') ? 'linear-text bg-linear' : 'text-white'" size="32px" />
      </div>
      <div class="statistics-box-content">
        <h3 :class="(bgMode == 'simple') ? 'linear-text bg-linear' : 'text-white'"
          class="q-ma-none text-weight-bold text-left">{{ seperateNumber(statistic) }}</h3>
      </div>
      <div class="statistics-box-date">
        <span :class="(bgMode == 'simple') ? 'linear-text bg-linear' : 'text-white'" class="text-weight-bold">{{
        $t('general.lastUpdated')
        }}: {{ getLocaleDate(subtractMinute(10)) }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'covidCases',
  props: {
    statistic: {
      required: true,
      type: Number,
      default: 0

    },
    statisticName: {
      required: true,
      type: String
    },
    bgMode: {
      required: true,
      type: String,
      validator: propValue => { return (propValue == 'simple' || propValue == 'linear') }
    },
    icon: {
      required: true,
      type: String,
    }
  }
})
</script>
<style scoped>
.statistics-box {
  gap: 15px;
}
</style>
