<template>
  <div>
    <v-layout class="main-page">
      <v-app-bar prominent :elevation="0" class="px-md-12">
        <!-- <v-toolbar-title class="text-white d-inline-flex d-md-none">Tie</v-toolbar-title>
        <v-toolbar-title class="text-white d-none d-md-inline-flex">Yossakorn Napeang</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <template
          v-for="(item, index) in linkedList"
          :key="index"
        >
          <NuxtLink
            v-if="!item.type"
            :to="item.url"
            target="_blank"
          >
            <v-btn icon>
              <v-icon class="text-white">{{ item.icon }}</v-icon>
            </v-btn>
          </NuxtLink>
          <a
            v-else
            :href="'mailto:'+item.url"
          >
            <v-btn icon>
              <v-icon class="text-white">{{ item.icon }}</v-icon>
            </v-btn>
          </a>
        </template>
      </v-app-bar>
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </div>
</template>
  
<script setup lang="ts">

const linkedList = ref([
  { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/ynt29/' },
  { icon: 'mdi-github', url: "https://github.com/ynt29/" },
  { icon: 'mdi-email-outline', url: "yossakorntie@gmail.com", type: 'email' },
  { icon: "mdi-cellphone" }
])

</script>
  
<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";

:deep() {
  .main-page {
    background-color: $tie-blue;
    min-height: 100dvh;
  }

  .v-toolbar {
    background-color: $tie-blue;
  }

  .v-btn:hover .v-btn__content i::before {
    color: #D3D3D3;
  }

  @media (min-width: 961px) {
    i {
      font-size: 32px;
    }
  }
}
</style>