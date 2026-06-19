<script setup lang="ts">
import { PropType, computed, inject } from 'vue';
import { Product } from '../models/product';
import { usePiniaCartStore } from '../providers/CartStore';

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
  mode: {
    type: String,
    required: false,
    default: 'card', // Possible values: 'card', 'details'
  },
});

// Inject handleAddToCart function
const addToCart = inject('addToCart') as (product: Product) => void;
const handleAddToCart = () => {
  if (addToCart) {
    addToCart(props.product);
  }
};

const piniaCartStore = usePiniaCartStore();

const handleAddToCartWithPinia = () => {
  piniaCartStore.addToCart(props.product.id);
};

// Computed property to determine if the card is in detailed mode
const isDetailedMode = computed(() => props.mode === 'details');
</script>

<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-card class="mx-auto" :max-width="isDetailedMode ? '80%' : '300px'">
        <v-img
          :src="product.thumbnail"
          alt="Product Image"
          height="200"
        ></v-img>
        <v-card-title>
          {{ product.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ product.category }}
        </v-card-subtitle>
        <v-card-text>
          <!-- Show description only in detailed mode -->
          <p v-if="isDetailedMode">{{ product.description }}</p>
          <p class="font-weight-bold">Price: ${{ product.price }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="handleAddToCart">Add to Cart</v-btn>
          <v-btn variant="text" color="secondary" v-bind="activatorProps">
            Aperçu
          </v-btn>
          <!-- Show "Details" button only when not in detailed mode -->
          <v-btn v-if="!isDetailedMode" variant="text" color="secondary" :to="'/products/details/' + product.id">
            Details
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close Dialog"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
