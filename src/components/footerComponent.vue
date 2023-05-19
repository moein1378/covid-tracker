<template>
  <q-footer class="text-white" :class="(isDarkMode())?'bg-dark':'bg-grey-3'">
    <div class="row reverse wrap justify-center items-center q-py-sm q-px-md">
      <div class="logo q-mx-md">
        <img src="./../assets/svg/footer-logo-light.svg" alt="footer-logo-light">
      </div>
      <div class="q-mx-md github-link">
        <a href="https://www.github.com" target="_blank">
          <q-icon name="ion-logo-github" class="cursor-pointer linear-text bg-linear" size="32px"></q-icon>
        </a>
      </div>
      <div class="created-by q-mx-md linear-text bg-linear">
        <span>
          {{ $t('general.createdBy') }} {{$t('general.creator')}}
        </span>
      </div>
    </div>
  </q-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'footerComponent',
})
</script>
