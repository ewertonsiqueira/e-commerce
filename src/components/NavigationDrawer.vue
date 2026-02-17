<template>
  <v-navigation-drawer v-model="isOpen" temporary location="right" width="500">
    <div class="d-flex h-100 align-center justify-center">
      <div class="font-weight-bold">O seu carrinho está vazio.</div>
    </div>
    <div class="d-flex flex-column h-100">
      <div class="d-flex align-center justify-space-between pa-4">
        <h4>Carrinho de Compra</h4>
        <v-btn @click="close" icon="mdi-close"></v-btn>
      </div>
      <div>
        <v-list class="h-100 overflow-y-auto">
          <v-list-item v-for="(item, index) in 5" :key="index">
            <div class="d-flex">
              <div class="mr-4">
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYVLa4GF-t9_826yweNjj1QsQF3KM9gIynjEMCA1FBVh-BOkSJbmnKQeCY4wv1KiV9IdKIQhvdeofgYCnS8qcOkjNBOM9e"
                  alt=""
                  style="width: 100px"
                />
              </div>

              <div class="d-flex flex-column justify-space-between">
                <div>
                  <h5>Descricao Produto</h5>
                  <div>
                    <strong>Produto {{ index + 1 }}</strong>
                  </div>
                </div>
                <div class="d-flex align-center justify-space-between">
                  <div class="w-50">
                    <v-text-field
                      type="number"
                      min="0"
                      variant="outlined"
                      label="Quantidade"
                      density="compact"
                      hide-details
                    ></v-text-field>
                  </div>
                  <div>
                    <v-btn
                      elevation="0"
                      density="compact"
                      icon="mdi-delete"
                    ></v-btn>
                  </div>
                </div>
              </div>
            </div>
          </v-list-item>
        </v-list>
      </div>
    </div>
    <template v-slot:append>
      <div class="d-flex justify-space-between ma-4">
        <div>Total:</div>
        <div>
          <strong>R$ 100,00</strong>
        </div>
      </div>
      <v-divider class="mb-2"></v-divider>

      <div class="d-flex align-center justify-center">
        <div class="pa-2">
          <v-btn color="primary" class="text-capitalize">
            Finalizar Compra
          </v-btn>
          Ou
          <v-btn color="primary" class="text-capitalize" @click="close">
            Continuar Comprando
          </v-btn>
        </div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { useUserCart } from "@/composables/userCart";
const { isOpen, close } = useUserCart();
</script>
