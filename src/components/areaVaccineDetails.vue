<template>
  <q-card-section class="scroll">
    <q-table class="sticky-header-table" v-model:pagination="pagination" separator="cell" virtual-scroll
      title="Vaccine nfo" :filter="filter" :rows="vaccineInfo" :columns="vaccineInfoTableColumns" row-key="index" flat
      bordered>
      <template v-slot:top>
        <div class="row justify-between items-center full-width">
          <q-form @submit.prevent="$emit('getVaccineInfo',dayNumber)"
            class="row justify-start items-center wrap q-gutter-md">
            <q-input outlined type="number" v-model="dayNumber" :label="$t('label.lastDays')" lazy-rules :rules="[
            val => val !== null && val !== '' || $t('validationRules.notEmpty'),
            val => val > 0 || $t('validationRules.mustBePositiveAndBiggerThanZeroValue')
            ]" />
            <div>
              <q-btn :label="$t('label.catch')" type="submit" color="primary" />
            </div>
          </q-form>
          <q-input outlined v-model="filter" :label="$t('label.search')">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn color="primary" icon-right="archive" :label="$t('label.exportCsv')" no-caps
            @click="$emit('exportTable')" />
        </div>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props" class="text-primary text-capitalize">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="index" :props="props">
            {{ props.row.index+1 }}
          </q-td>
          <q-td key="total" :props="props">
            {{ seperateNumber(props.row.total) }}
          </q-td>
          <q-td key="daily" :props="props">
            {{ seperateNumber(props.row.daily) }}
          </q-td>
          <q-td key="totalPerHundred" :props="props">
            {{ seperateNumber(props.row.totalPerHundred) }}
          </q-td>
          <q-td key="dailyPerMillion" :props="props">
            {{ seperateNumber(props.row.dailyPerMillion) }}
          </q-td>
          <q-td key="date" :props="props">
            {{ props.row.date }}
          </q-td>
        </q-tr>
      </template>
      <template v-slot:pagination>
        <q-pagination v-if="pagesNumber<=vaccineInfo.length" v-model="pagination.page" color="primary"
          :max="pagesNumber" :max-pages="6" boundary-numbers size="md" />
      </template>
    </q-table>
  </q-card-section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import paginationType from '../constants/types/paginationType'
export default defineComponent({
  name: 'areaVaccineDetails',
  emits: ['getVaccineInfo', 'exportTable'],
  data() {
    return {
      filter: '' as string,
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10
      } as paginationType,
      dayNumber: 1 as number
    }
  },
  props: {
    vaccineInfo: {
      type: Array,
      required: true
    },
    vaccineInfoTableColumns: {
      type: Array,
      required: true
    },

  },
  computed: {
    pagesNumber() {
      return Math.ceil(this.vaccineInfo.length / this.pagination.rowsPerPage)
    }
  },
})
</script>
<style scoped>
.sticky-header-table {
  height: 500px;
}

:deep(.sticky-header-table thead tr th) {
  position: sticky;
  z-index: 1;
}

:deep(.sticky-header-table thead tr:first-child th) {
  top: 0;
}

:deep(.sticky-header-table .q-table--loading thead tr:last-child th) {
  top: 48px;
}
</style>
