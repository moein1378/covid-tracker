<template>
  <div class="q-pa-md q-my-md">
    <template v-if="areaType == 'country'">
      <q-intersection v-for="(value, key, index) in covidInfoList" :key="index" transition="scale" v-ripple
        class="custom-shadow-box rounded-borders q-pa-md q-my-md" :class="(isDarkMode())?'bg-dark':'bg-white'">
        <q-item>
          <q-item-section>
            <q-item-label class="text-h5 text-weight-bold text-capitalize linear-text bg-linear">{{
            $t(`AreaCovidDetail.${key}`)
            }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label class="text-h5 text-weight-bold text-capitalize linear-text bg-linear">{{
            seperateNumber(value)
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-intersection>
    </template>
    <template v-else>
      <q-intersection v-for="(value, key, index) in covidInfoList" :key="index" transition="scale" v-ripple
        class="custom-shadow-box rounded-borders q-pa-md q-my-md" :class="(isDarkMode())?'bg-dark':'bg-white'">
        <q-item>
          <q-item-section>
            <q-item-label class="text-h5 text-weight-bold text-capitalize linear-text bg-linear">{{
            $t(`AreaCovidDetail.${key}`)
            }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label class="text-h5 text-weight-bold text-capitalize linear-text bg-linear">{{
            seperateNumber(value)
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-intersection>
    </template>

    <q-item class="q-pa-md rounded-borders bg-linear">
      <q-item-section>
        <q-item-label class="text-h6 text-weight-bold text-capitalize text-white">
          {{ $t('general.lastUpdated') }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-item-label class="text-h6 text-weight-bold text-capitalize text-white">
          {{ getLocaleDate(subtractMinute(10)) }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'areaCovidDetails',
  props: {
    covidInfoList: {
      type: Object,
      required: true,
    },
    areaType: {
      type: String,
      required: true,

      validator: propValue => {
        return (propValue == 'country' || propValue == 'state')
      }
    }
  }
})
</script>
