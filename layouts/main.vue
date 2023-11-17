<template>
  <div>
    <v-layout class="main-page">
      <v-app-bar prominent :elevation="0">
        <v-toolbar-title class="text-white">Yossakorn</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn icon>
            <v-icon class="text-white">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon class="text-white">mdi-github</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon class="text-white">mdi-email-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon class="text-white">mdi-cellphone</v-icon>
          </v-btn> -->
      </v-app-bar>
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </div>
</template>
  
  <script setup lang="ts">
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
}
</style>