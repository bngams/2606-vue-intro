<script setup lang="ts">
import { ref, reactive, provide, computed } from 'vue';

const cartState = reactive({
  items: [] as { productId: number; quantity: number }[],
});

const otherCartState = ref([] as { productId: number; quantity: number }[]);

const addToCart = (productId: number) => {
  const existingItem = cartState.items.find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartState.items.push({ productId, quantity: 1 });
  }
};

const removeFromCart = (productId: number) => {
  cartState.items = cartState.items.filter((item) => item.productId !== productId);
};

// TODO: transform as computed 
const totalItems = () => cartState.items.reduce((acc, item) => acc + item.quantity, 0);

// Provide the cart state and actions
provide('cartState', cartState);
provide('addToCart', addToCart);
provide('removeFromCart', removeFromCart);
provide('totalItems', totalItems);

// or global provide the cart logic as a single object
// provide('cartLogic', {
//   addToCart,
//   removeFromCart,
//   totalItems,
// });
</script>

<template>
  <slot />
</template>
