<template>
  <router-link
    :to="(countryIso2 && countryIso2 != 'us') ? `country-covid-info/${countryIso2}` : `state-covid-info/${countryOrStateName}`"
    class="col-auto custom-shadow-box rounded-borders q-pa-md q-my-md" :class="(isDarkMode())?'bg-dark':'bg-white'">
    <div class="flex justify-start items-start case-header">
      <div class="country-flag shadow-10">
        <q-img :src="`https://countryflagsapi.com/svg/${(countryIso2) ? countryIso2 : 'us'}`" :ratio="16 / 9"
          class="rounded-borders" />
      </div>
      <div class="country-total-cases-statistic">
        <h6 class="country-name linear-text bg-linear text-weight-bold text-capitalize q-ma-none">
          {{ countryOrStateName }}</h6>
        <h6 class="linear-text bg-linear text-weight-bold text-capitalize q-ma-none">{{ $t('covidCases.totalCases') }}
        </h6>
        <div class="flex justify-start items-center country-total-cases">
          <q-icon name="coronavirus" class="linear-text bg-linear text-h4" />
          <h6 class="text-weight-bold linear-text bg-linear q-ma-none">{{ seperateNumber(cases) }}</h6>
        </div>
      </div>
    </div>

    <div class="column items-start justify-around content-between country wrap-statistic">
      <div class="flex justify-between items-center">

        <div class="flex justify-between items-center statistic-box">
          <q-icon name="sick" class="linear-text bg-linear" size="32px" />
          <div class="column">
            <h6 class="q-ma-none text-weight-bold text-capitalize linear-text bg-linear">{{ $t('covidCases.activeCases')
            }}</h6>
            <h6 class="q-ma-none text-weight-bold text-capitalize linear-text bg-linear">
              {{ seperateNumber(activeCases) }}</h6>
          </div>
        </div>

        <div class="flex justify-between items-center statistic-box">
          <q-icon name="health_and_safety" class="linear-text bg-linear" size="32px" />
          <div class="column">
            <h6 class="q-ma-none text-weight-bold text-capitalize linear-text bg-linear">{{
            $t('covidCases.recoveredCases') }}
            </h6>
            <h6 class="q-ma-none text-weight-bold text-capitalize linear-text bg-linear">
              {{ seperateNumber(recoveredCases) }}</h6>
          </div>
        </div>

      </div>

      <div class="flex justify-between items-center">

        <div class="flex justify-between items-center statistic-box">
          <q-icon name="mdi-coffin" class="linear-text bg-linear" size="32px" />
          <div class="column">
            <h6 class="q-ma-none text-weight-bold text-capitalize linear-text bg-linear">{{ $t('covidCases.deathsCases')
            }}</h6>
            <h6 class="q-ma-none text-weight-bold text-capitalize linear-text bg-linear">
              {{ seperateNumber(deathsCases) }}</h6>
          </div>
        </div>

        <div class="flex justify-between items-center statistic-box">
          <q-icon name="masks" class="linear-text bg-linear" size="32px" />
          <div class="column">
            <h6 class="q-ma-none text-weight-bold text-capitalize linear-text bg-linear">{{ $t('covidCases.todayCases')
            }}</h6>
            <h6 class="q-ma-none text-weight-bold text-capitalize linear-text bg-linear">
              {{ seperateNumber(todayCases) }}</h6>
          </div>
        </div>

      </div>
    </div>

    <div class="statistics-box-date">
      <span class="text-weight-bold linear-text bg-linear">
        {{ $t('general.lastUpdated') }}: {{ getLocaleDate(subtractMinute(10)) }}
      </span>
    </div>
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'areaCovidCases',
  props: {
    countryOrStateName: {
      type: String,
      required: true
    },
    countryIso2: {
      type: String,
      required: true
    },
    cases: {
      type: Number,
      required: true
    },
    activeCases: {
      type: Number,
      required: true
    },
    recoveredCases: {
      type: Number,
      required: true
    },
    deathsCases: {
      type: Number,
      required: true
    },
    todayCases: {
      type: Number,
      required: true
    }
  },
})
</script>
<style scoped>
.case-header {
  gap: 20px;
}

.country-flag {
  width: 100px;
  height: fit-content;
}

.country-flag img {
  width: inherit;
}

.statistic-box {
  gap: 10px;
}
</style>
