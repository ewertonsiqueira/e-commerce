<template>
  <v-app-bar app class="border-b text-center" dark density="comfortable" flat>
    <v-btn @click="theme.toggle()" icon="mdi-palette"></v-btn>
    <v-toolbar-title>E-commerce</v-toolbar-title>
    <template #append>
      <v-btn @click="open">
        <v-badge
          color="primary"
          :content="cartItems.length"
          location="top right"
        >
          <v-icon icon="mdi-cart" />
        </v-badge>
      </v-btn>
    </template>
  </v-app-bar>
</template>
<script setup>
import { useTheme } from "vuetify";
import { useUserCart } from "@/composables/userCart";

const theme = useTheme();
const { open, cartItems } = useUserCart();
</script>
