<template>
  <q-page>
    <div class="full-width row wrap justify-between items-start content-start info-row">

      <q-dialog full-width v-model="vaccineInfoDialog">
        <q-card>

          <q-separator />
          <areaVaccineDetails :vaccineInfo="vaccineInfo" :vaccineInfoTableColumns="vaccineInfoTableColumns"
            @getVaccineInfo="getVaccineInfo" @exportTable="exportTable">
          </areaVaccineDetails>
          <q-separator />

          <q-card-actions align="right">
            <q-btn flat :label="$t('label.close')" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <div class="col-5 info-col-box">
        <div class="bg-linear rounded-borders q-pa-md q-my-md info-box">

          <q-skeleton v-if="covidInfoPendingFlag" type="rect" class="q-pa-md" />

          <div v-else class="row justify-between items-start info-col-box-header">
            <div class="row justify-start items-start area-info-box">
              <div class="country-flag shadow-10">
                <q-img :src="svgFlagAddress" class="rounded-borders" />
              </div>
              <div class="country-name-box">
                <h5 class="country-name text-white text-weight-bold text-capitalize q-ma-none">
                  {{ areaName }}
                </h5>
              </div>
            </div>
            <div class="vaccine-info-box">
              <q-btn class="text-white text-weight-bold text-capitalize q-pa-none"
                @click="getVaccineInfo(1), vaccineInfoDialog = !vaccineInfoDialog" flat color="primary"
                :label="$t('label.vaccineInfo')" size="xl">
                <q-icon name="vaccines" class="text-white q-mx-sm vaccine-link-icon" size="32px" />
              </q-btn>
            </div>
          </div>
        </div>

        <div v-if="covidInfoPendingFlag" class="q-pa-md q-my-md">
          <q-item v-for="index in 20" :key="index">
            <q-item-section>
              <q-skeleton type="rect" class="q-pa-md" />
            </q-item-section>
          </q-item>
        </div>
        <areaCovidDetails v-else :covidInfoList="(areaType == 'country') ? countryCovidInfo : stateCovidInfo"
          :areaType="areaType"></areaCovidDetails>
      </div>

      <div class="col-6 map-col-box">
        <div class="custom-shadow-box rounded-borders q-pa-md q-my-md map-box"
          :class="(isDarkMode()) ? 'bg-dark' : 'bg-white'">
          <q-skeleton v-if="covidInfoPendingFlag" height="100%" />
          <areaOnGoogleMap v-else :mapAddress="mapAddress"></areaOnGoogleMap>
        </div>
      </div>

    </div>
  </q-page>
</template>
<script lang="ts">
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { defineComponent } from 'vue';
import { exportFile, useQuasar } from 'quasar'
import covidTrackerDataService from '../services/covidTrackerDataService'
import areaCovidDetails from '../components/areaCovidDetails.vue'
import areaOnGoogleMap from '../components/areaOnGoogleMap.vue'
import areaVaccineDetails from '../components/areaVaccineDetails.vue'
import vaccineInfoTableColumnsType from '../constants/types/vaccineInfoTableColumnsType'
import stateCovidInfoType from '../constants/types/stateCovidInfoType'
import countryCovidInfoType from '../constants/types/countryCovidInfoType'
import vaccineInfoType from '../constants/types/countryCovidInfoType'
export default defineComponent({
  name: 'covidInfo',
  components: {
    areaCovidDetails,
    areaOnGoogleMap,
    areaVaccineDetails
  },
  data() {
    return {
      areaType: '' as string,
      areaName: '' as string,
      mapAddress: '' as string,
      svgFlagAddress: '' as string,
      lat: 0 as number,
      long: 0 as number,
      stateCovidInfo: {} as stateCovidInfoType,
      countryCovidInfo: {} as countryCovidInfoType,
      covidInfoPendingFlag: true as boolean,
      vaccineInfoDialog: false as boolean,
      vaccineInfo: [] as vaccineInfoType[],
      vaccineInfoTableColumns: [
        {
          name: 'index',
          label: '#',
          format: (val: any) => { `${val}` },
          field: 'index'
        },
        { name: 'total', align: 'center', label: this.$t('vaccineInfoTableColumns.total'), field: 'total', sortable: true },
        { name: 'daily', align: 'center', label: this.$t('vaccineInfoTableColumns.daily'), field: 'daily', sortable: true },
        { name: 'totalPerHundred', align: 'center', label: this.$t('vaccineInfoTableColumns.totalPerHundred'), field: 'totalPerHundred', sortable: true },
        { name: 'dailyPerMillion', align: 'center', label: this.$t('vaccineInfoTableColumns.dailyPerMillion'), field: 'dailyPerMillion', sortable: true },
        { name: 'date', align: 'center', label: this.$t('vaccineInfoTableColumns.date'), field: 'date', sortable: true },
      ] as vaccineInfoTableColumnsType[]
      ,
      $q: useQuasar()
    }
  },
  methods: {
    updateCountryCovidInfo() {
      delete this.countryCovidInfo?.countryInfo;
      delete this.countryCovidInfo?.continent;
      delete this.countryCovidInfo?.country;
    },
    crunchingCountryCovidInfo(data: countryCovidInfoType) {
      this.lat = (data.countryInfo) ? data.countryInfo.lat : 0;
      this.long = (data.countryInfo) ? data.countryInfo.long : 0;
      this.areaName = (data.country) ? data.country : '';
      this.mapAddress = `https://maps.google.com/maps?q=${this.lat},${this.long}&hl=es&z=4&amp;&output=embed`;
      this.svgFlagAddress = `https://countryflagsapi.com/svg/${this.$route.params.code}`;
      this.countryCovidInfo = data;
      this.updateCountryCovidInfo();
    },
    getCountryCovidInfo(code: string) {
      covidTrackerDataService.getSpecificCountry(code)
        .then((response: { data: countryCovidInfoType }) => {
          let data = response.data;
          this.covidInfoPendingFlag = false;
          this.crunchingCountryCovidInfo(data);
        })
        .catch((e) => {
          if (e.response && e.response.status && e.response.status == 404)
            this.$router.push({ name: 'notFound' });
        });
    },
    updateStateCovidInfo() {
      delete this.stateCovidInfo?.state;
    },
    crunchingStateCovidInfo(data: stateCovidInfoType) {
      this.areaName = (data.state) ? data.state : '';
      this.mapAddress = `https://maps.google.com/maps?q=${this.areaName}&hl=es&z=4&amp;&output=embed`;
      this.svgFlagAddress = 'https://countryflagsapi.com/svg/us';
      this.stateCovidInfo = data;
      this.updateStateCovidInfo();
    },
    getStateCovidInfo(code: string) {
      covidTrackerDataService.getSpecificState(code)
        .then((response: { data: stateCovidInfoType }) => {
          let data = response.data;
          this.covidInfoPendingFlag = false;
          this.crunchingStateCovidInfo(data)
        })
        .catch((e) => {
          if (e.response && e.response.status && e.response.status == 404)
            this.$router.push({ name: 'notFound' });
        });
    },
    getVaccineInfo(dayNumber: number) {
      if (this.areaType == 'country') {
        covidTrackerDataService.getCountryVaccineInfo(this.areaName, dayNumber)
          .then((response: { data: { timeline: vaccineInfoType[] } }) => {
            let data = response.data;
            this.vaccineInfo = data.timeline;
            this.addIndexFieldToTable();
          })
          .catch((e) => {
            if (e.response && e.response.status && e.response.status == 404)
              this.$router.push({ name: 'notFound' });
          });
      } else if (this.areaType == 'state') {
        covidTrackerDataService.getStateVaccineInfo(this.areaName, dayNumber)
          .then((response: { data: any }) => {
            let data = response.data;
            this.vaccineInfo = data.timeline;
            this.addIndexFieldToTable();
          })
          .catch((e) => {
            if (e.response && e.response.status && e.response.status == 404)
              this.$router.push({ name: 'notFound' });
          });
      }
    },
    addIndexFieldToTable() {
      this.vaccineInfo.forEach((row: any, index: any) => {
        row.index = index
      })
    },
    wrapCsvValue(val?: any, formatFn?: any, row?: any) {
      let formatted = formatFn !== void 0
        ? formatFn(val, row)
        : val

      formatted = formatted === void 0 || formatted === null
        ? ''
        : String(formatted)

      formatted = formatted.split('"').join('""')
      return `"${formatted}"`
    },
    exportTable() {
      const content = [this.vaccineInfoTableColumns.map(col => this.wrapCsvValue(col.label))].concat(
        this.vaccineInfo.map(row => this.vaccineInfoTableColumns.map(col => this.wrapCsvValue(
          typeof col.field === 'function'
            ? col.field
            : row[col.field === void 0 ? col.name as keyof vaccineInfoType : col.field as keyof vaccineInfoType],
          col.format,
          row
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'table-export.csv',
        content,
        'text/csv'
      )

      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    }
  },
  watch: {
    '$route.params.code': {
      handler: function (code) {
        if (code) {
          let code = this.$route.params.code;
          code = code.toString();
          this.areaType = (this.$route.path.includes('state')) ? 'state' : 'country';
          (this.areaType == 'country') ? this.getCountryCovidInfo(code) : this.getStateCovidInfo(code);
        }
      },
      deep: true,
      immediate: true
    }
  }
})

</script>
<style scoped>
.info-row,
.area-info-box {
  gap: 10px;
}

.info-box {
  z-index: 5;
}

.info-box,
.map-col-box {
  position: sticky;
  top: 10px;
}

.map-box {
  height: 100vh;
}

.map-box iframe {
  border: none;
}

.country-flag {
  width: 100px;
  height: fit-content;
}

.vaccine-link-icon {
  animation: jumping 1s cubic-bezier(.36, .07, .57, .99) infinite;
}

@keyframes jumping {
  0% {
    transform: scale(1.5) translateY(0);
  }

  20% {
    transform: scale(1.5) translateY(-5px);
  }

  30% {
    transform: scale(1.5) translateY(5px);
  }

  50% {
    transform: scale(1.5) translateY(-5px);
  }

  60% {
    transform: scale(1.5) translateY(5px);
  }

  100% {
    transform: scale(1.5) translateY(0);
  }
}
</style>
