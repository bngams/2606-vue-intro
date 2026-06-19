// stores/counter.js
import { defineStore } from 'pinia'

export const usePiniaCartStore = defineStore('piniaCart', {
  state: () => {
    return { 
        cart: [] as { productId: number; quantity: number }[],
        totalItems: 0
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addToCart(productId: number) {
      const existingItem = this.cart.find((item) => item.productId === productId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ productId, quantity: 1 });
      }
      this.totalItems = this.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
  },
})