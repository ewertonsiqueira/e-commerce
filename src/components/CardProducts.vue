<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="i in 8" :key="i">
        <v-card>
          <div class="bg-white py-2 px-6">
            <v-img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYVLa4GF-t9_826yweNjj1QsQF3KM9gIynjEMCA1FBVh-BOkSJbmnKQeCY4wv1KiV9IdKIQhvdeofgYCnS8qcOkjNBOM9e"
              alt=""
            />
          </div>
          <v-card-text>
            <h4>Descrição do Produto</h4>
            <div class="my-5">
              <div class="font-weight-light">Preço real aqui</div>
              <div class="text-h5 font-weight-bold">Preço com Desconto</div>
              <div class="font-weight-light">Info que será no pix</div>
            </div>
            <v-btn block color="primary">Comprar</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
