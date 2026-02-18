<template>
  <v-container>
    <v-row no-gutters class="h-100">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="product in products"
        :key="product.id"
      >
        <v-card class="ma-2">
          <div class="bg-white py-2 px-6">
            <v-img :src="product.image" :alt="product.name" />
          </div>
          <v-card-text>
            <h4>{{ product.name }}</h4>
            <div class="my-5">
              <div class="font-weight-light">
                {{ formatPrice(product.price) }}
              </div>
              <div class="text-h5 font-weight-bold">
                {{ formatPrice(product.promotion) }}
              </div>
              <div class="font-weight-light">{{ product.conditions }}</div>
            </div>
            <v-btn
              block
              color="primary"
              @click="addToCart(product)"
              :loading="loading"
              >Comprar</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { formatPrice } from "@/utils";
import { onMounted, ref } from "vue";
import { useUserCart } from "@/composables/userCart";

const products = ref([]);
const { addToCart, loading } = useUserCart();

onMounted(() => {
  fetchProducts();
});

function fetchProducts() {
  fetch("http://localhost:8000/products")
    .then((response) => response.json())
    .then((data) => {
      products.value = data;
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}
</script>
