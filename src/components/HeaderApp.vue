<template>
  <v-app-bar app class="border-b text-center" dark density="comfortable" flat>
    <v-toolbar-title>E-commerce Tabajara</v-toolbar-title>

    <template #append>
      <v-badge color="success" content="99+" location="top right">
        <v-icon icon="mdi-cart" />
      </v-badge>
      <v-btn @click="theme.toggle()" icon="mdi-palette"></v-btn>
    </template>
  </v-app-bar>
</template>
<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();
</script>
