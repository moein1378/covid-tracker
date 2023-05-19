<template>
  <div class="bg-linear border-radius-inherit q-pa-sm">
    <q-form @submit.prevent="sendCountriesOrStates" class="flex items-center justify-evenly items-center q-w-100">
      <q-btn flat color="white" type="submit" size="lg" icon="arrow_back" label="go"
        class="text-white text-capitalize" />
      <q-select standout="bg-white" label-color="dark" multiple clearable v-model="finalySelectedList" use-input
        input-debounce="0" :label="(onCountryMode) ? 'select country' : 'select state'" :options="selectedListOption"
        @filter="filterFn" behavior="dialog" class="select-country-box text-capitalize">
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-dark">
              No results
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section avatar>
              <q-img :src="`https://countryflagsapi.com/svg/${(onCountryMode) ? scope.opt.code : 'US'}`" :ratio="16 / 9"
                class="rounded-borders" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ (onCountryMode) ? scope.opt.name : scope.opt }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:selected-item="scope">
          <q-chip removable dense @remove="scope.removeAtIndex(scope.index)" :tabindex="scope.tabindex" color="white"
            text-color="secondary" class="q-ma-xs">
            {{ (onCountryMode) ? scope.opt.name : scope.opt }}
          </q-chip>
        </template>
      </q-select>
      <q-checkbox v-model="onCountryMode" :label="(onCountryMode) ? 'country' : 'state'" @click="changeListItem"
        checked-icon="flag" size="lg" unchecked-icon="south_america" color="white" keep-color
        class="text-white text-capitalize" />
    </q-form>
  </div>
</template>
<script lang="ts">
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { defineComponent } from 'vue';
import { mapState } from 'pinia'
import { covidTracker } from '../stores/covidTrackerStore'
export default defineComponent({
  name: 'optionBar',
  emits: ['filledCountryOrStateInfo'],
  data() {
    return {
      onCountryMode: true as boolean,
      finalySelectedList: null,
      countryOrStateList: [] as any,
      selectedListOption: [] as object[],
    }
  },
  computed: {
    ...mapState(covidTracker, ['countryListAllIsoData', 'allState']),
  },
  methods: {
    filterFn(val: any, update: any) {
      if (val === '') {
        update(() => {
          this.selectedListOption = this.countryOrStateList
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.selectedListOption = this.countryOrStateList.filter((v: any) => (this.onCountryMode) ? v.name.toLowerCase().indexOf(needle) > -1 : v.toLowerCase().indexOf(needle) > -1)
      })
    },
    sendCountriesOrStates() {
      this.$emit('filledCountryOrStateInfo', this.finalySelectedList, this.onCountryMode)
    },
    changeListItem() {
      this.finalySelectedList = null;
      (this.onCountryMode) ? this.countryOrStateList = this.countryListAllIsoData : this.countryOrStateList = this.allState
    },
  },
  mounted() {
    this.countryOrStateList = this.countryListAllIsoData
    this.sendCountriesOrStates()
  },
})
</script>
<style scoped>
.tabs-box {
  max-width: -webkit-fill-available;
}

.select-country-box {
  width: 25%;
  height: 57px;
  overflow: hidden;
}

:deep(.q-field__messages>div) {
  color: white;
}
</style>
