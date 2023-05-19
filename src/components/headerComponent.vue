<template>
  <q-header class="text-primary shadow-2" :class="(isDarkMode())?'bg-dark':'bg-white'">
    <q-toolbar class="d-flex full-width justify-between">
      <router-link to="/">
        <img src="./../assets/svg/logo-light.svg">
      </router-link>
      <div @click="drawer = !drawer">
        <transition v-if="!drawer" appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
          <q-btn flat round dense icon="menu" />
        </transition>
        <transition v-else appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
          <q-btn flat round dense icon="mdi-close" />
        </transition>
      </div>
    </q-toolbar>
    <q-drawer :mini="true" v-model="drawer" :width="200" overlay>
      <q-scroll-area style="height: calc(100% - 150px);">
        <q-list>

          <q-item clickable v-ripple @click="darkAndLightMode()">
            <darkAndLightMode :darkAndLightModeFlag="darkAndLightModeFlag"></darkAndLightMode>
          </q-item>

          <q-item clickable v-ripple @click="aboutDialog = !aboutDialog">
            <q-item-section avatar>
              <q-icon name="mdi-information" class="cursor-pointer text-primary" size="32px">
                <q-tooltip class="bg-primary text-capitalize" anchor="center right" self="center left">
                  {{$t('toolTip.about')}}</q-tooltip>
              </q-icon>
              <q-dialog v-model="aboutDialog" persistent transition-show="slide-up" transition-hide="slide-down">
                <aboutDialogSection></aboutDialogSection>
              </q-dialog>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :href="$t('externalLink.myGithub')" target="_blank">
            <q-item-section avatar>
              <q-icon name="mdi-github" class="cursor-pointer text-primary" size="32px">
                <q-tooltip class="bg-primary text-capitalize" anchor="center right" self="center left">
                  {{$t('toolTip.myGithub')}}
                </q-tooltip>
              </q-icon>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple v-if="Object.keys(installPrompt).length != 0" @click="installApp()">
            <q-item-section avatar>
              <q-icon name="mdi-download" class="cursor-pointer text-primary" size="32px">
                <q-tooltip class="bg-primary text-capitalize" anchor="center right" self="center left">
                  {{$t('toolTip.getPwaVersion')}}
                </q-tooltip>
              </q-icon>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>

    </q-drawer>
  </q-header>
</template>
<script lang="ts">
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { defineComponent } from 'vue';
import { Dark } from 'quasar'
import aboutDialogSection from './../components/aboutDialogSection.vue'
import darkAndLightMode from './../components/darkAndLightMode.vue'
export default defineComponent({
  name: 'headerComponent',
  components: {
    aboutDialogSection,
    darkAndLightMode
  },
  data() {
    return {
      aboutDialog: false as boolean,
      darkAndLightModeFlag: true as boolean,
      drawer: false as boolean,
      installPrompt: {} as any,
      openAppPrompt: {} as any,
    }
  },
  methods: {
    darkAndLightMode() {
      this.darkAndLightModeFlag = !this.darkAndLightModeFlag
      Dark.set(!this.darkAndLightModeFlag)
    },
    installApp() {
      this.installPrompt.prompt();
      this.installPrompt.userChoice.then((result: any) => {
        if (result.outcome === 'accepted') {
          this.installPrompt = null;
          console.log('User Accepted');
        } else {
          console.log('User denied');
        }
      });
    },
    beforeinstallprompt() {
      window.addEventListener('beforeinstallprompt', (e: Event) => {
        e.preventDefault();
        this.installPrompt = e;
      });
    }
  },
  created() {
    this.beforeinstallprompt();
  },
})
</script>
