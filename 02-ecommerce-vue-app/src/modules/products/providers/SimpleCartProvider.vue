<script lang="ts">
import { provide, ref } from 'vue';
// import { Product } from '../models/product';

const nbItemsInCart = ref(0);

function addToCart(product: any) {
  nbItemsInCart.value++;
  console.log(`Added product to cart: ${product.title}`);
  console.log(`Total items in cart: ${nbItemsInCart.value}`);
}

provide('addToCart', addToCart);

</script>
<template>
    <slot></slot>
</template>