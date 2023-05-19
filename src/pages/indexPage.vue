<template>
  <q-page>
    <div v-if="covidCasesWorldPendingFlag" class="row wrap justify-around items-center content-center">
      <q-card-section class="col-sm-3" v-for="index in 4" :key="index">
        <q-skeleton type="text" class="q-pa-md" />
        <q-skeleton type="rect" class="q-pa-md" />
        <q-skeleton type="text" class="q-pa-md" />
      </q-card-section>
    </div>
    <div v-else class="fit row reverse wrap justify-around items-center content-center q-my-md">
      <covidCases :statistic="covidCasesWorld.active" :statisticName="$t('covidCases.activeCases')" bgMode="simple"
        icon="sick">
      </covidCases>

      <covidCases :statistic="covidCasesWorld.todayCases" :statisticName="$t('covidCases.todayCases')" bgMode="simple"
        icon="masks">
      </covidCases>

      <covidCases :statistic="covidCasesWorld.recovered" :statisticName="$t('covidCases.recoveredCases')"
        bgMode="linear" icon="health_and_safety"></CovidCases>

      <covidCases :statistic="covidCasesWorld.cases" :statisticName="$t('covidCases.cases')" bgMode="linear"
        icon="coronavirus">
      </covidCases>
    </div>

    <div class="q-my-md rounded-borders" :class="(isDarkMode()) ? 'bg-dark' : 'bg-grey-3'">
      <optionBar :optionBarItems="optionBarItems" @filledCountryOrStateInfo="getFinallySelectedList">
      </optionBar>

      <div v-if="countryOrStateCovidCasesPendingFlag" class="fit row wrap justify-between items-center content-center">
        <div v-for="index in 3" :key="index" class="col-sm-3 custom-shadow-box rounded-borders q-pa-md q-my-md"
          :class="(isDarkMode()) ? 'bg-dark' : 'bg-white'">
          <q-card-section class="row wrap justify-start q-pa-none">
            <div class="col-3">
              <q-skeleton type="QToggle" />
            </div>
            <div class="col">
              <q-skeleton v-for="index in 3" :key="index" type="text" />
            </div>
          </q-card-section>
          <q-card-section class="row wrap justify-start q-pa-none">
            <div v-for="index in 4" :key="index" class="col-6">
              <q-card-section class="row wrap justify-start q-pa-sm">
                <div class="col">
                  <q-skeleton type="circle" />
                </div>
                <div class="col">
                  <q-skeleton v-for="index in 2" :key="index" type="text" />
                </div>
              </q-card-section>
            </div>
          </q-card-section>
          <div>
            <q-skeleton type="text" />
          </div>
        </div>
      </div>
      <div v-else class="fit row wrap justify-around items-center">
        <areaCovidCases v-for="(item, index) in countryOrStateCovidCases" :key="index"
          :countryOrStateName="(item.country) ? item.country : item.state"
          :countryIso2="(item.countryInfo && item.countryInfo.iso2) ? item.countryInfo.iso2 : 'us'" :cases="item.cases"
          :activeCases="item.active" :recoveredCases="item.recovered" :deathsCases="item.deaths"
          :todayCases="item.todayCases">
        </areaCovidCases>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { defineComponent } from 'vue';
import countryDataType from './../constants/types/countryDataType'
import stateDataType from './../constants/types/stateDataType'
import covidCasesWorldType from './../constants/types/covidCasesWorldType'
import covidTrackerDataService from './../services/covidTrackerDataService'
import covidCases from './../components/covidCases.vue'
import areaCovidCases from '../components/areaCovidCases.vue'
import optionBar from './../components/optionBar.vue'
export default defineComponent({
  name: 'indexPage',
  components: {
    covidCases,
    optionBar,
    areaCovidCases
  },
  data() {
    return {
      countryOrStateCovidCases: [] as countryDataType[] | stateDataType[],
      covidCasesWorld: {} as covidCasesWorldType,
      covidCasesWorldPendingFlag: true as boolean,
      countryOrStateCovidCasesPendingFlag: true as boolean,
    }
  },
  methods: {
    retrieveCovidCasesWorld(): void {
      covidTrackerDataService.getAll()
        .then((response: { data: covidCasesWorldType }) => {
          this.covidCasesWorld = response.data;
          this.covidCasesWorldPendingFlag = false;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    getAllCountries(): void {
      covidTrackerDataService.getAllCountries()
        .then((response: { data: countryDataType[] | stateDataType[] }) => {
          this.countryOrStateCovidCases = response.data
          this.countryOrStateCovidCasesPendingFlag = false
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    getAllStates(): void {
      covidTrackerDataService.getAllStates()
        .then((response: { data: countryDataType[] | stateDataType[] }) => {
          this.countryOrStateCovidCases = response.data
          this.countryOrStateCovidCasesPendingFlag = false
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    getSpecificCountry(country: string): void {
      covidTrackerDataService.getSpecificCountry(country)
        .then((response: { data: countryDataType[] | stateDataType[] }) => {
          this.countryOrStateCovidCases = response.data
          this.countryOrStateCovidCasesPendingFlag = false
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    getSpecificState(state: string): void {
      covidTrackerDataService.getSpecificState(state)
        .then((response: { data: countryDataType[] | stateDataType[] }) => {
          this.countryOrStateCovidCases = response.data
          this.countryOrStateCovidCasesPendingFlag = false
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    getFinallySelectedList(selectedList: any, onCountryMode: boolean): void {
      if (onCountryMode && selectedList === null) {
        this.getAllCountries();
      } else if (!onCountryMode && selectedList === null) {
        this.getAllStates();
      } else if (onCountryMode && selectedList !== null) {
        let countrySelectedList: any[] = [];
        selectedList.forEach((element: any) => {
          countrySelectedList.push(element?.code)
        });
        this.getSpecificCountry(countrySelectedList.toString())
      } else if (!onCountryMode && selectedList !== null) {
        this.getSpecificState(selectedList.toString());
      }
    },
  },
  mounted() {
    this.retrieveCovidCasesWorld();
  },
});
</script>
