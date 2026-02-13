<template>
  <v-app-bar
    app
    class="border-b text-center"
    dark
    density="comfortable"
    flat
  >
    <v-toolbar-title>E-commerce Tabajara</v-toolbar-title>

    <template #append>
      <v-btn text>Home</v-btn>
      <v-btn text>Produtos</v-btn>
      <v-btn text>Contato</v-btn>
      <v-badge color="primary" content="99+" location="top right">
        <v-icon icon="mdi-cart" />
      </v-badge>
    </template>
  </v-app-bar>
</template>
<script setup>

</script>
